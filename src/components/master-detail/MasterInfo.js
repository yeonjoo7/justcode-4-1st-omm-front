import React from 'react';
import { FaUser, FaTrophy, FaLocationArrow } from 'react-icons/fa';
import styles from './MasterInfo.module.scss';

function MasterInfo(props) {
  const { master } = props;
  return (
    <div className={styles.masterInfoContainer}>
      <div className={styles.basicInfo}>
        <h2>기본정보</h2>
        <div>
          <div>
            <FaUser /> 본인 인증
          </div>
          <div>
            <FaTrophy /> {} 회 고용됨
          </div>
          <div>
            <FaLocationArrow />
          </div>
        </div>
      </div>
      <div className={styles.moreInfo}>
        <h2>추가정보</h2>
        <div>
          {' '}
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default MasterInfo;
