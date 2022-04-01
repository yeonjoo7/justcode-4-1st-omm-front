import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';

function Login() {
  let [id, setId] = useState('');
  let [pw, setPw] = useState('');

  useEffect(() => {
    fetch('로그인api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem('access-token', res.access_token);
      });
  }, []);

  const navigate = useNavigate();
  const gotomain = () => {
    navigate('/');
  };
  let abledButton = id.includes('@') && pw.length > 7;
  const emailReg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const pwReg = /(?=.*\d)(?=.*[a-zA-ZS]).{8,}/;

  return (
    <div className={styles.page}>
      <div>
        <div className={styles.loginText}>로그인</div>
        <section className={styles.section}>
          <div>
            <div className={styles.email}>이메일</div>
            <input
              onChange={e => setId(e.target.value)}
              value={id}
              className={
                emailReg.test(id) || !id
                  ? styles.id
                  : `${styles.id} ${styles.invalid}`
              }
              type="email"
              placeholder="example@soongo.com"
            />
            <div
              className={
                !id || id.includes('@')
                  ? `${styles.invalidInput} ${styles.off}`
                  : `${styles.invalidInput}`
              }
            >
              이메일 주소를 입력해주세요.
            </div>
            <div
              className={
                emailReg.test(id) || !id.includes('@')
                  ? `${styles.invalidInput} ${styles.off}`
                  : `${styles.invalidInput}`
              }
            >
              올바른 이메일 주소를 입력해주세요.
            </div>
            <div className={styles.password}>비밀번호</div>
            <input
              onChange={e => setPw(e.target.value)}
              value={pw}
              className={
                pwReg.test(pw) || !pw
                  ? styles.pw
                  : `${styles.pw} ${styles.invalid}`
              }
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
            <div
              className={
                !pw || pw.length >= 8
                  ? `${styles.invalidInput} ${styles.off}`
                  : `${styles.invalidInput}`
              }
            >
              비밀번호를 입력해주세요.
            </div>
            <div
              className={
                !pw || pw.length < 8 || pwReg.test(pw)
                  ? `${styles.invalidInput} ${styles.off}`
                  : `${styles.invalidInput}`
              }
            >
              영문+숫자 조합 8자리 이상 입력해주세요.
            </div>
            <Link to="./findpw" className={styles.findPw}>
              비밀번호찾기
            </Link>
            <button
              className={styles.loginBtn}
              disabled={!abledButton}
              onClick={gotomain}
            >
              이메일 로그인
            </button>
            <button className={styles.kakaoBtn}>Kakao로 시작하기</button>
            <button className={styles.facebookBtn}>
              Facebook으로 시작하기
            </button>
            <Link to="./signup" className={styles.goToSignUp}>
              계정이 없으신가요?
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Login;
