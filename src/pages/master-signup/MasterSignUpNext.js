import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MasterSignUpNext.module.scss';
import MasterSignUpFooter from '../../components/master-signup/MasterSignUpFooter';
import FormInfo from '../../components/master-signup/FormInfo';

// 추가구현
// 1. 118번째 줄, 프로그레스 바 페이지 연동

function FormBox({ questions, questionKey, lessonCategory }) {
  return (
    <>
      <h2 className={styles.formTitle}>
        구체적으로 어떤 서비스를 진행 할 수 있나요?
      </h2>
      {questions.map(data => {
        return (
          <QuestionForm
            name={data}
            value={data}
            content={data}
            key={questionKey++}
            lessonCategory={lessonCategory}
          />
        );
      })}
    </>
  );
}

function QuestionForm({ value, lessonCategory }) {
  const [check, setCheck] = useState(false);
  useEffect(() => {
    if (lessonCategory.includes(value.id.toString())) {
      setCheck(true);
    }
  }, [lessonCategory, value.id]);
  return (
    <div className={styles.questionBox}>
      <input
        id={value.id}
        className={styles.question}
        type="checkbox"
        name={value.name}
        value={value.id}
        checked={check}
        onChange={e => {
          if (e.target.checked && !lessonCategory.includes(e.target.value)) {
            lessonCategory.push(e.target.value);
          }

          if (!e.target.checked) {
            lessonCategory.splice(lessonCategory.indexOf(e.target.value), 1);
          }
          setCheck(prev => !prev);
        }}
      />
      <label htmlFor={value.id}>
        <span className={styles.checkInner}>✔</span>
      </label>
      {value.name}
    </div>
  );
}

function MasterSignUpNext() {
  // api로 카테고리마다 다른 질문 받아오기 fetch('고수 가입 질문 get api url')
  // Parent-Category, Child-Category의 데이터 형태를 백엔드에서 어떻게 넘길 지 알아야함.
  // 고수 가입 상세 기입은 2페이지로 구성. 하위 카테고리 -> 고수 개인 정보

  const params = useParams();
  const [questions, setQuestions] = useState([]);
  const lessonCategory = useRef([]);
  const address = useRef('');
  const detail_address = useRef('');
  const nameInvalid = useRef('');
  const emailInvalid = useRef('');
  const pwInvalid = useRef('');
  const ageInvalid = useRef('');
  const phoneInvalid = useRef('');
  const agreeInvalid = useRef('');
  const addressInvalid = useRef('');
  const masterInfo = useRef({
    name: '',
    email: '',
    phoneNumber: '',
    detailAddress: '',
    address: '',
    lessonCatID: lessonCategory.current,
  });
  let questionKey = 0;
  let formComponentKey = 0;

  // 하단 부분을 params로 교체
  useEffect(() => {
    fetch(`http://localhost:8000/category/${params.id}`, {
      method: 'GET',
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        return setQuestions(data);
      });
  }, []);

  // api로 설문 결과 보내기
  // 현재는 자식 컴포넌트 footer바에서 이 함수를 실행시키고 있다.
  // 부모 컴포넌트에서 보내는 것이 맞을까?

  // 나이, 개인정보 공유 동의
  const [agreeCheck, setAgreeCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);

  const [formPage, setFormRender] = useState(0);
  const formRender = [
    <FormBox
      questions={questions}
      questionKey={questionKey}
      key={formComponentKey++}
      lessonCategory={lessonCategory.current}
    />,
    <FormInfo
      key={formComponentKey++}
      masterInfo={masterInfo.current}
      ageCheck={ageCheck}
      agreeCheck={agreeCheck}
      setAgeCheck={setAgeCheck}
      setAgreeCheck={setAgreeCheck}
    />,
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.progressbarBox}>
          <div className={styles.barContainer}>
            <div
              className={
                formPage === 0
                  ? styles.barProgress
                  : `${styles.barProgress} ${styles.bar100}`
              }
            />
          </div>
          <p className={styles.progressNumber}>
            {formPage === 0 ? '50%' : '100%'}
          </p>
        </div>
        <form className={styles.formBox}>{formRender[formPage]}</form>
      </div>
      <MasterSignUpFooter
        setFormRender={setFormRender}
        renderLength={formRender.length - 1}
        pageNumber={formPage}
        allData={masterInfo.current}
        checkLesson={lessonCategory.current}
        agreeCheck={agreeCheck}
        ageCheck={agreeCheck}
      />
    </section>
  );
}

export default MasterSignUpNext;
