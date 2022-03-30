import React, { useState } from 'react';
import styles from './MasterSignUpFooter.module.scss';

function MasterSignUpFooter({
  changeTitle,
  titleLength,
  changeForm,
  formLength,
}) {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.btnWrapper}>
        <button
          className={styles.btnPrev}
          onClick={() => changeTitle(prev => (prev === 0 ? prev : prev - 1))}
        >
          이전
        </button>
        <button
          className={styles.btnNext}
          onClick={() =>
            changeTitle(prev => (prev === titleLength ? prev : prev + 1))
          }
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default MasterSignUpFooter;
