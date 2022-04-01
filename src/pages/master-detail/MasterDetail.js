import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MasterDetail.module.scss';
import MasterRequest from 'src/components/master-detail/MasterRequest';
import MasterProfile from 'src/components/master-detail/MasterProfile';
import MasterDetailNav from 'src/components/master-detail/MasterDetailNav';
import MasterInfo from 'src/components/master-detail/MasterInfo';
import MasterCategory from 'src/components/master-detail/MasterCategory';
import MasterImage from 'src/components/master-detail/MasterImage';
import MasterReview from 'src/components/master-detail/MasterReview';

function MasterDetail() {
  const params = useParams();
  const [master, setMaster] = useState({});
  //get master profile fetch
  useEffect(() => {
    //fetch(`http://localhost:8000/profile/users/${params}`, { method: 'GET' })
    fetch(`http://localhost:3000/data/tekwoolee/${params.id}.json`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMaster(data);
      });
  }, []);
  return (
    <div className={styles.container}>
      {/* <Header/> */}
      <div className={styles.detailContainer}>
        <div className={styles.masterProfile}>
          <MasterProfile master={master} />
        </div>
        <div className={styles.pageNav}>
          <MasterDetailNav master={master} />
        </div>
        <div className={styles.masterIntro}>
          <h2>한줄소개</h2>
          <div>{master.intro}</div>
        </div>
        <div className={styles.masterInfoContainer}>
          <MasterInfo master={master} />
        </div>
        <div className={styles.lessonCategory}>
          <div>
            <MasterCategory master={master} />
          </div>
        </div>
        <div className={styles.masterImages}>
          <div>
            <MasterImage master={master} />
          </div>
        </div>
        <div className={styles.masterReview}>
          <div>
            <MasterReview master={master} />
          </div>
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
