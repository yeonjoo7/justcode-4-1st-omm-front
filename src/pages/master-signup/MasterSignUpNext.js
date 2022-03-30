import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MasterSignUpNext.module.scss';
import MasterSignUpFooter from '../../components/master-signup/MasterSignUpFooter';

function FormBox({ questions, questionKey }) {
  return (
    <>
      <h2 className={styles.formTitle}>
        {' '}
        구체적으로 어떤 서비스를 진행 할 수 있나요?
      </h2>
      {/* {props로 내려준다.} */}
      {questions.data1.map(data => {
        return (
          <QuestionForm
            name={data}
            value={data}
            content={data}
            key={questionKey++}
          />
        );
      })}
    </>
  );
}

function FormInfo() {
  return <></>;
}

function QuestionForm({ value }) {
  const [check, setCheck] = useState(false);
  return (
    <div className={styles.questionBox}>
      <input
        id={value}
        className={styles.question}
        type="checkbox"
        name={value}
        value={value}
        checked={check}
        onChange={() => setCheck(prev => !prev)}
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

  const [questions, setQuestions] = useState({ data1: [] });

  let questionKey = 0;

  useEffect(() => {
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
  useEffect(() => {
    fetch('고수 고객 가입 api url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then()
      .then();
  }, []);

  const [formPage, setFormRender] = useState(0);
  const formRender = [
    <FormBox
      questions={questions}
      questionKey={questionKey}
      key={questionKey}
    />,
    <FormInfo />,
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.progressbar}>{/* {추가구현?} */} 0%</div>
        {/* <h2>{props로 내려준다.}</h2> */}
        {/* 1 : 어떤 서비스를 제공할 수 있나요? */}
        {/* 2 : 구체적으로 어떤 서비스를 제공할 수 있나요? */}
        {/* 3 : 지역 정보 */}

        <form className={styles.formBox}>
          {/* <h2 className={styles.formTitle}>
            {questionTitleArr[questionTitle]}
          </h2>
          {questions.data1.map(data => {
            return (
              <QuestionForm
                name={data}
                value={data}
                content={data}
                key={questionKey++}
              />
            );
          })} */}
          {formRender[formPage]}
        </form>
      </div>
      <MasterSignUpFooter />
    </section>
  );
}

export default MasterSignUpNext;
