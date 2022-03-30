import React from 'react';
import styles from './Header.module.scss';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.header__box}>
      <nav className={styles.header}>
        <span className={styles.header__title}>
          <span className={styles.headerLogo}>
            <img
              src="images/loco/Soongo-logo.png"
              width="120px"
              alt="soongo-logo"
            />
            <Link to="/" />
          </span>
          <div className={`${styles.headerSearchBox} ${styles.hidden}`}>
            <input
              className={styles.header__search}
              placeholder="어떤 서비스가 필요하세요?"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={styles.search_icon}
            />
          </div>
        </span>

        <span className={`${styles.menuBtn} ${styles.hidden}`}>
          <FontAwesomeIcon icon={faBars} />
        </span>

        <span className={`${styles.searchBtn} ${styles.hidden}`}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>

        <ul className={styles.header__btn}>
          <li>
            <Link to="#" />
            고수찾기
          </li>
          <li>
            <Link to="#" />
            마켓
            <span className={styles.marcketNew}>N</span>
          </li>
          <li>
            <Link to="#" />
            로그인
          </li>
          <li>
            <Link to="#" />
            회원가입
          </li>
          <li className={styles.master_signup}>
            <Link to="#" />
            고수가입
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
