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
      {/* {props로 내려준다.} */}
      {questions.data1.map(data => {
        // data1도 변수처리 해주어야함. {params.id} = theme_category 가져오기
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
    if (lessonCategory.includes(value)) {
      setCheck(true);
    }
  }, [lessonCategory, value]);
  return (
    <div className={styles.questionBox}>
      <input
        id={value}
        className={styles.question}
        type="checkbox"
        name={value}
        value={value}
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
      <label htmlFor={value}>
        <span className={styles.checkInner}>✔</span>
      </label>
      {value}
    </div>
  );
}

function MasterSignUpNext() {
  // api로 카테고리마다 다른 질문 받아오기 fetch('고수 가입 질문 get api url')
  // Parent-Category, Child-Category의 데이터 형태를 백엔드에서 어떻게 넘길 지 알아야함.
  // 고수 가입 상세 기입은 2페이지로 구성. 하위 카테고리 -> 고수 개인 정보

  const params = useParams();
  // 하단의 "data1"을 "params로 교체"
  const [questions, setQuestions] = useState({ data1: [] });
  const lessonCategory = useRef([]);
  const masterInfo = useRef({
    lesson_categories: lessonCategory.current,
    name: '',
    email: '',
    phone_number: '',
    gender: '',
    termAgree: false,
    ageAgree: false,
  });
  let questionKey = 0;
  let formComponentKey = 0;

  // 하단 부분을 params로 교체
  useEffect(() => {
    // fetch(`http://localhost:8000/category/${params}`, {
    //   method: 'GET',
    // })
    fetch('http://localhost:3000/data/tekwoolee/master-signup/question.json', {
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

  const visibleInvalid = useRef('');

  const [formPage, setFormRender] = useState(0);
  const formRender = [
    <FormBox
      questions={questions}
      questionKey={questionKey}
      key={formComponentKey}
      lessonCategory={lessonCategory.current}
    />,
    <FormInfo
      key={formComponentKey}
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
