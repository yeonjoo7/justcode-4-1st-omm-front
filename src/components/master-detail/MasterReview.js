import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './MasterReview.module.scss';

function MasterReview(props) {
  const { master } = props;
  const { review } = master;
  //   const { entireReview } = review;

  const rateStar = number => {
    const star = [];
    if (5 < number) {
      return;
    }
    for (let i = 1; i <= number; i++) {
      star.push(<FaStar color="#ffce21" key={i} />);
    }
    for (let i = 1; i <= 5 - number; i++) {
      star.push(<FaStar color="#e1e1e1" key={star.length + i} />);
    }
    return star;
  };

  const nameChange = string => {
    return string.slice(0, 1) + '**';
  };

  const dateFormat = date => {
    let reDate = new Date(date);
    return `${reDate.getFullYear()}.${reDate.getMonth()}.${reDate.getDate()}`;
  };

  return (
    <div>
      <h2>리뷰</h2>
      <div className={styles.summary}>
        <div className={styles.summaryNumber}>
          {!review
            ? null
            : parseFloat(Math.round(review.totalGrade * 100) / 100).toFixed(1)}
        </div>
        <div className={styles.summaryInfo}>
          {!review ? null : rateStar(review.totalGrade)}
          <p>{!review ? null : review.number}개 리뷰</p>
        </div>
      </div>
      <hr className={styles.breakLine} />
      <div>
        {!review
          ? null
          : review.entireReview.map(rvw => {
              return (
                <div key={rvw.username}>
                  <div>
                    <div className={styles.reviewUser}>
                      <div className={styles.reviewNameStar}>
                        <span>{nameChange(rvw.username)}</span>
                        <span>{rateStar(rvw.grade)}</span>
                      </div>
                      <div className={styles.reviewDate}>
                        <span>{dateFormat(rvw.created_At)}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.reviewContent}>{rvw.comment}</div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default MasterReview;
