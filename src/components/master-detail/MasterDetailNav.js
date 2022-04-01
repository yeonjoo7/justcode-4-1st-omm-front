import React, { useState } from 'react';
import styles from './MasterDetailNav.module.scss';

function MasterDetailNav(props) {
  // navbar 이동 추가 구현
  const { master } = props;
  const { review } = master;
  const { location } = props;
  const [scroll, setScroll] = useState('');
  const [active, setActive] = useState('');
  const select = e => {
    setActive(e.target.innerText);
  };
  return (
    <ul className={styles.container}>
      <li
        onClick={e => select(e)}
        className={active === '고수 정보' ? `${styles.active}` : null}
      >
        <span>고수 정보</span>
      </li>
      <li
        onClick={e => select(e)}
        className={active === '사진/동영상' ? `${styles.active}` : null}
      >
        <span>사진/동영상</span>
      </li>
      <li
        onClick={e => setActive('리뷰')}
        className={active === '리뷰' ? `${styles.active}` : null}
      >
        <span>{`리뷰 ${!review ? null : master.review.number}`}</span>
      </li>
      <li
        onClick={e => select(e)}
        className={active === '질문 답변' ? `${styles.active}` : null}
      >
        <span>질문 답변</span>
      </li>
    </ul>
  );
}

export default MasterDetailNav;
