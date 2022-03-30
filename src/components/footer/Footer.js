import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.infoBox}>
        <div className={styles.contacts}>
          <p className={styles.gen}>1234-5678</p>
          평일 10:00 - 18:00 <br />
          (점심시간 13:00 - 14:00 제외 · 주말/공휴일 제외)
        </div>
        <div className={styles.footerLink}>
          <ul>
            <li className={`${styles.footerTitle} ${styles.clickable}`}>
              <Link to="#" />
              숭고소개
            </li>
            <li className={styles.clickable}>
              <Link to="#" />팀 소개
            </li>
            <li className={styles.clickable}>
              <Link to="#" />
              팀원 안내
            </li>
          </ul>
          <div className={styles.hiddenLine} />
          <ul>
            <li className={styles.footerTitle}>고객 안내</li>
            <li>이용안내</li>
            <li>안전정책</li>
            <li>예상금액</li>
            <li className={styles.clickable}>
              <Link to="#" />
              고수찾기
            </li>
            <li>숭고보증</li>
            <li>고수에게묻다</li>
          </ul>
          <div className={styles.hiddenLine} />
          <ul>
            <li className={styles.footerTitle}>고수안내</li>
            <li>이용안내</li>
            <li>고수가이드</li>
            <li className={styles.clickable}>
              <Link to="#" />
              고수가입
            </li>
            <li>고수센터</li>
          </ul>
          <div className={styles.hiddenLine} />
          <ul>
            <li className={styles.footerTitle}>고객센터</li>
            <li>공지사항</li>
            <li>자주묻는질문</li>
          </ul>
          <div className={styles.hiddenLine} />
        </div>
      </div>
      <div className={styles.explanation}>
        <ul className={styles.documents}>
          <li>이용약관</li>
          <li>개인정보처리방침</li>
          <li>사업자 정보확인</li>
        </ul>
        <div className={styles.copyright}>
          이 사이트는 숨고 사이트를 참조하여 학습목적으로 만들었습니다.
          <br />
          실무수준의 프로젝트이지만 학습용으로 만들었기 때문에
          <br />이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로
          문제될 수 있습니다.
          <br />
          Copyright ©OMM Team. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
