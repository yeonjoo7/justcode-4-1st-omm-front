import { React, useState } from 'react';
import styles from './Header.module.scss';
import { FaRegBell } from 'react-icons/fa';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Header() {
  const [profileClick, setProfileClick] = useState(false);

  // const [hide, setHide] = useState(false);
  // const [pageY, setPageY] = useState(0);
  // const documentRef = useRef(document);

  // const handleScroll = () => {
  //     const { pageYOffset } = window;
  //     const deltaY = pageYOffset - pageY;
  //     const hide = pageYOffset !== 0 && deltaY >= 0;
  //     setHide(hide);
  //     setPageY(pageYOffset);
  // };

  // const throttleScroll = throttle(handleScroll, 50);

  // useEffect(() => {
  //     documentRef.current.addEventListener('scroll', throttleScroll);
  //     return () => documentRef.current.removeEventListener('scroll', throttleScroll);
  // }, [pageY]);

  return (
    <div className={styles.headerBox}>
      <nav className={styles.header}>
        <span className={styles.headerTitle}>
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
              className={styles.headerSearch}
              placeholder="어떤 서비스가 필요하세요?"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={styles.searchIcon}
            />
          </div>
        </span>

        <span className={`${styles.menuBtn} ${styles.hidden}`}>
          <FontAwesomeIcon icon={faBars} />
        </span>

        <span className={`${styles.searchBtn} ${styles.hidden}`}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <ul className={styles.headerBtn}>
          <li>
            <Link to="#" />
            고수찾기
          </li>
          <li>
            <Link to="#" />
            마켓
            <span className={styles.marketNew}>N</span>
          </li>
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
          <li className={styles.hidden}>
            <FaRegBell size="1.3em" />
          </li>
          <li>
            <img
              src="images\thump\carol-magalhaes-dSsXm15D9hg-unsplash.jpg"
              className={styles.profileImg}
              alt="profile_image"
            />
          </li>
          <li className={`${styles.grayColor} ${styles.hidden}`}>
            {profileClick ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
