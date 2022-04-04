import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './MainCategoryReport.module.scss';
import ReportForm from '../../components/step/ThemaCategoryForm';

function MainCategoryReport() {
  const location = useLocation();
  const { category, image } = location.state;
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

  return (
    <div className={styles.root_container}>
      {category}
      <ReportForm category={category} image={image} question={question} />
    </div>
  );
}

export default MainCategoryReport;
