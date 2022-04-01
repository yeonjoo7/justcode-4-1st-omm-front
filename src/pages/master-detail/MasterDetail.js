import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MasterDetail.module.scss';
import MasterProfile from '../../components/master-detail/MasterProfile';
import MasterRequest from '../../components/master-detail/MasterRequest';
function MasterDetail() {
  const params = useParams();
  //get master profile fetch
  useEffect(() => {
    //fetch(`http://localhost:8000/profile/users/${params}`, { method: 'GET' })
    fetch('...data/tekwoolee/master.json', { method: 'GET' })
      .then(res => res.json())
      .then(res => console.log(res));
  }, []);
  console.log(params);
  return (
    <div className={styles.container}>
      {/* <Header/> */}
      <div className={styles.detailContainer}>
        <div className={styles.masterProfile}>
          <MasterProfile />
        </div>
        <div className={styles.pageNav}>
          <div>고수 정보</div>
          <div>사진/동영상</div>
          <div>리뷰 </div>
          <div>질문 답변</div>
        </div>
        <div className={styles.masterIntro}>
          <h2>한줄소개</h2>
          <div>{}</div>
        </div>
        <div className={styles.masterInfoContainer}>
          <div className={styles.basicInfo}>
            <h2>기본정보</h2>
            <div></div>
          </div>
          <div className={styles.moreInfo}>
            <h2>추가정보</h2>
            <div></div>
          </div>
        </div>
        <div className={styles.lessonCategory}>
          <h2>제공 서비스</h2>
          <div>{/* <MasterCategory/> */}</div>
        </div>
        <div className={styles.masterImages}>
          <h2>사진 및 동영상</h2>
          <div>{/* <MasterImage/> */}</div>
        </div>
        <div className={styles.masterReview}>
          <h2>리뷰</h2>
          <div>{/* <MasterReview/> */}</div>
        </div>
      </div>
      <div className={styles.requestContainer}>
        <MasterRequest />
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default MasterDetail;
