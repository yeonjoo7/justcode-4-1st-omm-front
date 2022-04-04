import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './MainCategoryReport.module.scss';
import ReportForm from '../../components/step/ThemaCategoryForm';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

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

  let imgUrl = '/' + image;
  return (
    <>
      <Header />/
      <div className={styles.root_container}>
        <img src={imgUrl} alt="banner" className={styles.banner} />
        <div className={styles.container}>
          <h2>{category}</h2>
          <div className={styles.wrap}>
            <ReportForm category={category} image={image} question={question} />
            <div className={styles.text_wrap}></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainCategoryReport;
