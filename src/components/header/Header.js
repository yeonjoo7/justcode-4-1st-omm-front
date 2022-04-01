import { React, useState, useRef, useEffect } from 'react';
import styles from './Header.module.scss';
import { FaRegBell, FaBars } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Header() {
  const [profileClick, setProfileClick] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isNewQuotation, setIsNewQuotation] = useState(true);
  const [chatNumber, setChatNumber] = useState(26);

  // useEffect(() => {
  //   fetch('http://localhost:3000/login')
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.token) {
  //         setIsLogin(true);
  //         setIsNewQuotation(true);
  //         setChatNumber(data.chatNum);
  //       }
  //     });
  // }, []);

  const profile = useRef();
  const profileOutline = () => {
    if (!profileClick) {
      profile.current.style.outline = '2px solid #03c7ae';
      setProfileClick(true);
    } else {
      profile.current.style.outline = 'none';
      setProfileClick(false);
    }
  };

  return (
    <div className={styles.headerBox}>
      <nav className={styles.header}>
        <span className={styles.headerTitle}>
          <span className={styles.headerLogo}>
            <img
              src="http://localhost:3000/images/logo/Soongo-logo.png"
              width="120px"
              alt="soongo-logo"
            />
            <Link to="/" />
          </span>
          <div className={`${styles.headerSearchBox} ${styles.hidden}`}>
            <input
              className={styles.headerSearch}
              placeholder="어떤 서비스가 필요하세요?"
            />
            <FiSearch className={styles.searchIcon} />
          </div>
        </span>

        <span className={`${styles.menuBtn} ${styles.hidden}`}>
          <FaBars />
        </span>

        <span className={`${styles.searchBtn} ${styles.hidden}`}>
          <FiSearch />
        </span>
        <ul className={styles.headerBtn}>
          <li>
            <Link to="master/list">고수찾기</Link>
          </li>
          <li>
            <Link to="#" />
            마켓
            <span className={styles.marketNew}>N</span>
          </li>

          {isLogin ? (
            <>
              <li>
                <div className={styles.flexRow}>
                  <Link to="#" />
                  받은 견적
                  {isNewQuotation ? (
                    <div className={`${styles.redDot}`} />
                  ) : null}
                </div>
              </li>
              <li>
                <div className={styles.flexRow}>
                  <Link to="#" />
                  채팅
                  <div className={`${styles.chatNum}`}>{chatNumber}</div>
                </div>
              </li>
              <li>
                <FaRegBell size="1.3em" className={styles.bell} />
              </li>
              <li>
                <div className={styles.flexRow}>
                  <img
                    src="http://localhost:3000/images\thump\carol-magalhaes-dSsXm15D9hg-unsplash.jpg"
                    className={styles.profileImg}
                    alt="profile_image"
                    ref={profile}
                    onClick={profileOutline}
                  />
                  <div className={`${styles.grayColor} ${styles.hidden}`}>
                    {profileClick ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </div>
                </div>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="#" />
                로그인
              </li>
              <li>
                <Link to="#" />
                회원가입
              </li>
              <li className={styles.masterSignup}>
                <Link to="#" />
                고수가입
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
