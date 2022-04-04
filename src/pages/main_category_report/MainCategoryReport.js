import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './MainCategoryReport.module.scss';
import ReportForm from '../../components/step/ThemaCategoryForm';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { AiFillStar } from 'react-icons/ai';

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
          <div className={styles.star_list}>
            <AiFillStar color="#FFCE21" size="1.1em" />
            <AiFillStar color="#FFCE21" size="1.1em" />
            <AiFillStar color="#FFCE21" size="1.1em" />
            <AiFillStar color="#FFCE21" size="1.1em" />
            <AiFillStar color="#FFCE21" size="1.1em" />
          </div>
          <div className={styles.calc_num}>
            <h4>
              19,181
              <br />
              활동고수
            </h4>
            <h4>
              24,865
              <br />
              누적 요청서
            </h4>
            <h4>
              12,333
              <br />
              리뷰 수
            </h4>
          </div>
          <div className={styles.wrap}>
            <ReportForm category={category} image={image} question={question} />
            <div className={styles.text_wrap}>
              <p>
                <div className={styles.strong_div}>
                  <strong>숨고는 어떤 곳인가요?</strong>
                </div>
                <br />
                서비스가 필요한 고객과 서비스를 제공하는 숨은 고수를 쉽고 빠르게
                연결해드리는 전문가 매칭 서비스입니다. 1분 내외의 요청서를
                작성하면, 여러 고수님들이 맞춤형 견적을 보내드려요. 맘에 쏙 드는
                고수의 맞춤형 서비스를 받아보세요.
              </p>
              <p>
                <div className={styles.strong_div}>
                  <strong>방송댄스 레슨 고수만을 모았다!</strong>
                </div>
                <br /> 방송 댄스에 관심이 있는데 시작이 어려웠나요? 퇴근 후 취미
                생활, 원데이 클래스 등 방송 댄스를 배워보고 싶다면 요청서를
                작성해보세요. 선생님 프로필, 커리큘럼, 비용 비교하고 결정할 수
                있어요. 숨고를 통해 지금 바로 방송 댄스를 시작하세요!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainCategoryReport;
