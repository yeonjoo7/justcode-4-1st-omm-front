import React from 'react';
import styles from './HeaderProfileDropDown.module.scss';

function HeaderProfileDropDown() {
  return (
    <div className={styles.dropDownMain}>
      <div className={styles.dropDownWrapper}>
        <div className={styles.dropDownHeader}>
          <span>손성호님</span>
        </div>
        <div className={styles.dropDownContent}>
          <ul>
            <li>받은 견적</li>
            <li>고수로 전환</li>
            <li>로그아웃</li>
          </ul>
          <ul>
            <li>프로필 관리</li>
            <li>고객으로 전환</li>
            <li>로그아웃</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderProfileDropDown;
