import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './MainCategoryReport.module.scss';
import { AiFillStar } from 'react-icons/ai';

function MainCategoryReportComplete() {
  const location = useLocation();
  const { quest, category } = location.state;
  const [gosoList, setGosoList] = useState([]);

  let _result = {};
  let result = [];
  let category_num = 0;

  switch (category.category) {
    case '방송댄스 레슨':
      category_num = 1;
      break;
    case '보컬 레슨':
      category_num = 2;
      break;
    case '골프 레슨':
      category_num = 3;
      break;
    case '퍼스널트레이닝(PT)':
      category_num = 4;
      break;
    case '기타 레슨':
      category_num = 5;
      break;
    case '중국어 과외':
      category_num = 6;
      break;
    case '프레젠테이션 디자인':
      category_num = 7;
      break;
    case '인쇄물 디자인':
      category_num = 8;
      break;
    case '앱 디자인':
      category_num = 9;
      break;
    case '일러스트 디자인':
      category_num = 10;
      break;
    case '제품 디자인':
      category_num = 11;
      break;
    case '웹 디자인':
      category_num = 12;
      break;
    default:
      category_num = 0;
  }

  const keys = Object.keys(quest);
  for (let i = 0; i < keys.length; i++) {
    _result.user_id = 1;
    _result.id = i;
    _result.lesson_category_id = category_num;
    if (keys[i] === 'address1' || keys[i] === 'address2') {
      _result.question_id = i + 1;
    } else {
      _result.question_id = Number(keys[i]);
    }
    _result.choice_question_id = quest[keys[i]];
    result = result.concat(_result);
    _result = {};
  }
  console.log('1 :', result);

  useEffect(() => {
    fetch('/LessonDetail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(result),
    })
      .then(res => res.json())
      .then(result => {
        alert(result.message);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/hwseol/goso_list.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setGosoList(data);
      });
  }, []);

  return (
    <div className={styles.goso_container}>
      {gosoList.map((goso, index) => (
        <div className={styles.goso_wrap} key={index}>
          <img
            className={styles.img_box}
            src={goso.image}
            alt="profile_photo"
          />
          <div className={styles.text_box}>
            <h4>{goso.goso_name}</h4>
            <div className={styles.goso_line}>
              <AiFillStar color="#FFCE21" size="1.1em" />
              <p>{goso.star}</p>({goso.review_sum})&nbsp;&nbsp;
              <div className={styles.recruit_box}>{goso.recruit}회 고용</div>
            </div>
            <p className={styles.price}>
              총 {goso.price.toLocaleString('ko-KR')}원 부터 ~
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainCategoryReportComplete;
