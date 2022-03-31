import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MasterSignUpFooter.module.scss';

function MasterSignUpFooter({
  setFormRender,
  renderLength,
  pageNumber,
  allData,
  checkLesson,
  ageCheck,
  setAgeCheckLast,
  agreeCheck,
  setAgreeCheckLast,
}) {
  // 입력 정보 유효성 검사
  const emailReg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const pwReg = /(?=.*\d)(?=.*[a-zA-ZS]).{8,}/;
  const phoneReg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

  // 모든 데이터를 취합하여 보내는 footer
  const sendMasterInfo = data => {
    fetch('http://localhost:데이터보낼url', {
      method: 'POST',
      headers: { 'Content-Type': 'application/JSON' },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .catch(err => alert(err));
  };
  // 에러 핸들링 추가 필요

  // 구조분해 할당이 왜 안될까? 구조부해 할당 시 아예 값이 없는 것으로 나옴.
  // const { email, name, phone_number, password, ageAgree, termAgree } = allData;
  const navigate = useNavigate();
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
              pwReg.test(allData.password) &&
              emailReg.test(allData.email) &&
              phoneReg.test(allData.phone_number) &&
              2 <= allData.name.length &&
              allData.termAgree &&
              allData.ageAgree
            ) {
              // fetch 보내기
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
