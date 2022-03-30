import React from 'react';
import styles from './MasterSignUpFooter.module.scss';

function MasterSignUpFooter() {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.btnWrapper}>
        <button className={styles.btnPrev}>이전</button>
        <button className={styles.btnNext}>다음</button>
      </div>
    </div>
  );
}

export default MasterSignUpFooter;
