import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './MainCategoryReport.module.scss';
import Step from '../../components/step/ThemaCategoryStep';
import StepAddr from '../../components/step/ThemaCategoryStepAddr';
import { Link } from 'react-router-dom';
let currentStep = 1;

const ProgressBar = ({ progress }) => {
  return (
    <div className={styles.progress_div}>
      <div className={styles.progressbar}>
        <div className={styles.progress} style={{ width: `${progress}%` }} />
      </div>
      <p className={styles.percent}>{progress}%</p>
    </div>
  );
};

function ReportForm(category) {
  const [step, setStep] = useState(1);
  const [questNum, setQuestNum] = useState({});
  const [flag, setFlag] = useState(0);

  const onChange = e => {
    const { value, name } = e.target;
    setQuestNum({ ...questNum, [name]: value });
    setFlag(0);
  };
  /* question */
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/hwseol/lesson_question.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setQuestion(data.questions);
      });
  }, []);

  const _next = () => {
    return (() => {
      setFlag(0);
      if (questNum[currentStep]) {
        currentStep = currentStep >= step ? step + 1 : currentStep + 1;
        setStep(currentStep);
      } else setFlag(1);
    })();
  };
  const _complete = e => {
    if (
      !questNum.hasOwnProperty('address1') ||
      !questNum.hasOwnProperty('address2')
    ) {
      e.preventDefault();
      setFlag(1);
    } else if (questNum.address1 === '0' || questNum.address2 === '0') {
      e.preventDefault();
      setFlag(1);
    }
  };

  const NextButton = () => {
    if (currentStep < question.length + 1) {
      return (
        <button className={styles.btn_right} type="button" onClick={_next}>
          다음
        </button>
      );
    } else {
      return (
        <Link to="complete" state={{ quest: questNum, category: category }}>
          <button
            className={styles.btn_right}
            type="button"
            onClick={_complete}
          >
            완료
          </button>
        </Link>
      );
    }
  };
  const _prev = () => {
    currentStep = currentStep <= 1 ? 0 : currentStep - 1;
    setStep(currentStep);
  };

  const PrevButton = () => {
    if (currentStep > 1) {
      return (
        <button className={styles.btn_left} type="button" onClick={_prev}>
          이전
        </button>
      );
    }
    return null;
  };

  console.log('quest Num :', questNum);
  return (
    <div>
      <div className={styles.box}>
        <div className={styles.progress_wrap}>
          <p className={styles.progress_desc}>완료시 평균 4개의 견적 도착</p>
          <ProgressBar
            progress={parseInt(((step - 1) / question.length) * 100)}
          />
          {question.length === step - 1 ? (
            <StepAddr onChange={onChange} questNum={questNum} />
          ) : (
            <Step
              question={question[step - 1]}
              onChange={onChange}
              questNum={questNum}
            />
          )}
          <div className={styles.btn_div}>
            {flag ? (
              <div className={styles.option_select}>옵션을 선택하세요</div>
            ) : (
              <div className={styles.option_select}> </div>
            )}
            <PrevButton />
            <NextButton />
          </div>
        </div>
      </div>
    </div>
  );
}

function MainCategoryReport() {
  const location = useLocation();
  const { category } = location.state;
  return (
    <div className={styles.root_container}>
      {category}
      <ReportForm category={category} />
    </div>
  );
}

export default MainCategoryReport;
