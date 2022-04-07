import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MasterSignUpFooter.module.scss';

function MasterSignUpFooter({
  setFormRender,
  renderLength,
  pageNumber,
  allData,
  checkLesson,
}) {
  const navigate = useNavigate();

  // 입력 정보 유효성 검사
  const emailReg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const pwReg = /(?=.*\d)(?=.*[a-zA-ZS]).{8,}/;
  const phoneReg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

  // 모든 데이터를 취합하여 보내는 footer
  const sendMasterInfo = data => {
    console.log('before 함수 내부 fetch 실행 전 :', data);
    fetch('http://localhost:8000/master/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          console.log('error 1 : ', response);
          throw response;
        }
        console.log('return 1 : ', response);
        return response;
      })
      .then(res => res.json())
      .then(() => {
        alert('회원가입 성공');
        navigate('/');
      })
      .catch(error => error.json())
      .then(err => {
        console.log('catch -> then error : ', err);
        alert(`Error : ${err.message}`);
      });
  };
  // 에러 핸들링 추가 필요

  const { email, password, phoneNumber, name } = allData;
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.btnWrapper}>
        <button
          className={styles.btnPrev}
          onClick={() => {
            if (pageNumber === 0) {
              navigate('/pro');
            }
            setFormRender(prev => (prev === 0 ? prev : prev - 1));
          }}
        >
          이전
        </button>
        <button
          className={styles.btnNext}
          onClick={e => {
            if (checkLesson.length === 0) {
              return;
            }
            setFormRender(prev => (prev === renderLength ? prev : prev + 1));
            if (
              e.target.innerText === '가입하기' &&
              pwReg.test(password) &&
              emailReg.test(email) &&
              phoneReg.test(phoneNumber) &&
              2 <= name.length
            ) {
              // fetch 보내기
              console.log('fetch 실행 함수 이전 allData 검증', allData);
              sendMasterInfo(allData);
            } else {
              return;
            }
          }}
        >
          {pageNumber === renderLength ? '가입하기' : '다음'}
        </button>
      </div>
    </div>
  );
}

export default MasterSignUpFooter;
