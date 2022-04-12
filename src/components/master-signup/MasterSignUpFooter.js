import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MasterSignUpFooter.module.scss';

function MasterSignUpFooter({
  setFormPage,
  pageNumber,
  allData,
  checkLesson,
  addressRef,
}) {
  const navigate = useNavigate();

  //80 ~ 81 refactoring

  // 입력 정보 유효성 검사
  const emailReg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const pwReg = /(?=.*\d)(?=.*[a-zA-ZS]).{8,}/;
  const phoneReg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

  // 모든 데이터를 취합하여 보내는 footer
  const sendMasterInfo = data => {
    fetch('http://localhost:8000/master/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        return response;
      })
      .then(res => res.json())
      .then(() => {
        alert('회원가입 성공');
        navigate('/');
      })
      .catch(error => error.json())
      .then(err => {
        alert(`Error : ${err.message}`);
      });
  };
  // 에러 핸들링 추가 필요

  const {
    email,
    password,
    phoneNumber,
    name,
    address,
    detailAddress,
    lessonCatId,
  } = allData;
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.btnWrapper}>
        <button
          className={styles.btnPrev}
          onClick={() => {
            if (pageNumber === 0) {
              navigate('/pro');
            }
            setFormPage(prev => (prev === 0 ? prev : prev - 1));
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

            setFormPage(prev => (prev === 1 ? prev : prev + 1));
            if (e.target.innerText === '가입하기') {
              if (
                pwReg.test(password) &&
                emailReg.test(email) &&
                phoneReg.test(phoneNumber) &&
                2 <= name.length &&
                address &&
                detailAddress
              ) {
                // fetch 보내기
                sendMasterInfo(allData);
              } else if (
                localStorage.getItem('access_token') &&
                phoneReg.test(phoneNumber) &&
                address &&
                detailAddress
              ) {
                sendMasterInfo({
                  [address]: address,
                  [detailAddress]: detailAddress,
                  [phoneNumber]: phoneNumber,
                  [lessonCatId]: lessonCatId,
                });
              } else {
                if (!(allData.address || allData.detailAddress)) {
                  addressRef.current.style.display = 'block';
                }
                alert('모든 정보를 올바르게 입력해주세요');
              }
            }
            return;
          }}
        >
          {pageNumber === 1 ? '가입하기' : '다음'}
        </button>
      </div>
    </div>
  );
}

export default MasterSignUpFooter;
