import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MasterSignUpNext.module.scss';
import MasterSignUpFooter from '../../components/master-signup/MasterSignUpFooter';

function QuestionTitle() {}

function QuestionForm({ value }) {
  return (
    <div className={styles.questionBox}>
      <input type="checkbox" name={value} value={value} />
      {value}
    </div>
  );
}

function MasterSignUpNext() {
  // api로 카테고리마다 다른 질문 받아오기 fetch('고수 가입 질문 get api url')
  // Parent-Category, Child-Category의 데이터 형태를 백엔드에서 어떻게 넘길 지 알아야함.

  const [questions, setQuestions] = useState({ data1: [] });

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

  let questionKey = 0;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.progressbar}>{/* {추가구현?} */}</div>
        {/* <h2>{props로 내려준다.}</h2> */}
        {/* 1 : 어떤 서비스를 제공할 수 있나요? */}
        {/* 2 : 구체적으로 어떤 서비스를 제공할 수 있나요? */}
        {/* 3 : 지역 정보 */}
        <h2 className={styles.formTitle}>어떤 서비스를 제공할 수 있나요?</h2>
        <form className={styles.formBox}>
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
        </form>
      </div>
      <MasterSignUpFooter />
    </section>
  );
}

export default MasterSignUpNext;
