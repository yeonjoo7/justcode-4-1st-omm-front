import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';

function Login() {
  const navigate = useNavigate;
  const gotomain = () => {
    navigate('./');
  };
  let [id, setId] = useState('');
  let [pw, setPw] = useState('');

  return (
    <div classname={styles.body}>
      <div className={styles.loginText}>로그인</div>
      <section className={styles.section}>
        <div>
          <div className={styles.email}>이메일</div>
          <input
            value={id}
            className={styles.id}
            type="email"
            placeholder="example@soongo.com"
          />
          <div className={styles.password}>비밀번호</div>
          <input
            value={pw}
            className={styles.pw}
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
          <Link to="./findpw" className={styles.findpw}>
            비밀번호찾기
          </Link>
          <button className={styles.loginbtn} onClick={gotomain}>
            이메일 로그인
          </button>
          <button className={styles.Kakaobtn}>Kakao로 시작하기</button>
          <button className={styles.facebookbtn}>Facebook으로 시작하기</button>
          <Link to="./signup" className={styles.gotosignup}>
            계정이 없으신가요?
          </Link>
        </div>
      </section>
    </div>
  );
}
export default Login;
