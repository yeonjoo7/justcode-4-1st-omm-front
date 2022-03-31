import React from 'react';
// import { useNavigate } from 'react-router-dom';

import styles from './MasterItem.module.scss';
import { BsStarFill } from 'react-icons/bs';
import { FaRegCommentDots } from 'react-icons/fa';

const MasterItem = props => {
  const { master } = props;
  // const navigate = useNavigate();

  function handleNavigate() {
    // navigate()
  }

  const reviewerNameTrans =
    master.review.recentReview.username.slice(0, 1) + '**';

  return (
    <div onClick={handleNavigate} className={styles.masterItem}>
      <picture className={styles.imageWrapper}>
        <img src={master.userImage} alt={master.name} />
      </picture>
      <div className={`${styles.masterInfoWrapper} ${styles.textTruncate}`}>
        <span className={styles.masterInfoName}>{master.name}</span>
        <span className={`${styles.masterInfoIntro} ${styles.textTruncate}`}>
          {master.intro}
        </span>
        <span className={styles.masterInfoReview}>
          <span>
            <BsStarFill color="#fadb14" size="12px" />{' '}
            {master.review.totalGrade}
          </span>
          <span>({master.review.number})</span>
        </span>
        <span
          className={`${styles.masterInfoRecentReview} ${styles.textTruncate}`}
        >
          <span>
            <FaRegCommentDots size="12px" color="#666" />
          </span>
          <span>{reviewerNameTrans}</span>
          <span className={styles.textTruncate}>
            {master.review.recentReview.comment}
          </span>
        </span>
      </div>
    </div>
  );
};

export default MasterItem;
