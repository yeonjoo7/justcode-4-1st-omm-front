import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './UserSignUp.module.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function UserSignUp() {
  // api로 보내기
  useEffect(() => {
    fetch('일반 고객 가입 api url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailValue,
        username: nameValue,
        password: pwValue,
      }),
    })
      .then()
      .then();
  }, []);

  const navigate = useNavigate();
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [visiblePW, setPwVisible] = useState('password');
  const [agreeCheck, setAgreeCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);

  const emailReg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const pwReg = /(?=.*\d)(?=.*[a-zA-ZS]).{8,}/;

  return (
    <>
      <Header />
      <section className={styles.section}>
        <h3 className={styles.title}>숭고에 오신 것을 환영합니다</h3>
        <div className={styles.card}>
          <form className={styles.form}>
            <div className={styles.inputBox}>
              <p className={styles.inputName}>이름</p>
              <input
                className={
                  2 <= nameValue.length || !nameValue
                    ? styles.inputValue
                    : `${styles.inputValue} ${styles.invalid}`
                }
                type="text"
                value={nameValue}
                placeholder="이름(실명)을 입력해주세요"
                onChange={e => setNameValue(e.target.value)}
              />
              <div
                className={
                  2 <= nameValue.length || !nameValue
                    ? `${styles.invalidInput} ${styles.Off}`
                    : `${styles.invalidInput}`
                }
              >
                이름을 입력해주세요.
              </div>
            </div>
            <div className={styles.inputBox}>
              <p className={styles.inputName}>이메일</p>
              <input
                className={
                  emailReg.test(emailValue) || !emailValue
                    ? styles.inputValue
                    : `${styles.inputValue} ${styles.invalid}`
                }
                type="text"
                value={emailValue}
                placeholder="example@soongo.com"
                onChange={e => setEmailValue(e.target.value)}
              />
              <div
                className={
                  emailReg.test(emailValue) || !emailValue
                    ? `${styles.invalidInput} ${styles.Off}`
                    : `${styles.invalidInput}`
                }
              >
                이메일 주소를 입력해주세요.
              </div>
            </div>
            <div className={styles.inputBox}>
              <p className={styles.inputName}>비밀번호</p>
              <div className={styles.pwBox}>
                <input
                  className={
                    pwReg.test(pwValue) || !pwValue
                      ? styles.inputValue
                      : `${styles.inputValue} ${styles.invalid}`
                  }
                  type={visiblePW}
                  value={pwValue}
                  placeholder="영문+숫자 조합 8자리 이상 입력해주세요"
                  onChange={e => setPwValue(e.target.value)}
                />
                <button
                  className={`${styles.pwType}`}
                  value="표시"
                  onClick={e => {
                    //e.preventDefault();
                    if (e.target.childNodes[0].data === '표시') {
                      setPwVisible('text');
                      e.target.childNodes[0].data = '숨김';
                    } else {
                      setPwVisible('password');
                      e.target.childNodes[0].data = '표시';
                    }
                  }}
                >
                  표시
                </button>
              </div>
              <div
                className={
                  pwReg.test(pwValue) || !pwValue
                    ? `${styles.invalidInput} ${styles.Off}`
                    : `${styles.invalidInput}`
                }
              >
                비밀번호를 입력해주세요.
              </div>
            </div>
            <div className={styles.checkBox}>
              <input
                id="checkbox1"
                className={styles.checkboxCSS}
                type="checkbox"
                name="personalInfo"
                value="personalInto"
                checked={agreeCheck}
                onChange={() => setAgreeCheck(prev => !prev)}
              />
              <label htmlFor="checkbox1">
                <span className={styles.checkInner}>✔</span>
              </label>
              이용약관, 개인정보 수집 및 이용 동의 (필수)
              <p
                className={
                  agreeCheck
                    ? `${styles.invalidInput} ${styles.Off}`
                    : `${styles.invalidInput}`
                }
              >
                이용약관에 동의해주세요.
              </p>
            </div>
            <div className={styles.checkBox}>
              <input
                id="checkbox2"
                className={styles.checkboxCSS}
                type="checkbox"
                name="age-check"
                value="age-agreement"
                checked={ageCheck}
                onChange={() => setAgeCheck(prev => !prev)}
              />
              <label htmlFor="checkbox2">
                <span className={styles.checkInner}>✔</span>
              </label>
              만 14세 이상 (필수)
              <p
                className={
                  ageCheck
                    ? `${styles.invalidInput} ${styles.Off}`
                    : `${styles.invalidInput}`
                }
              >
                만 14세 이상 가입에 동의해주세요.
              </p>
            </div>

            <button
              className={styles.signUpBtn}
              disabled={
                emailReg.test(emailValue) &&
                pwReg.test(pwValue) &&
                2 <= nameValue.length &&
                agreeCheck &&
                ageCheck
                  ? false
                  : true
              }
              onClick={() => navigate('/')}
            >
              회원가입
            </button>
          </form>

          <p className={styles.gosuSignUp} onClick={() => navigate('/pro')}>
            고수로 가입하시나요?
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default UserSignUp;
