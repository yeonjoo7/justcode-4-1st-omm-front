import styles from './ReceivedReport.module.scss';
import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ReceviedBox({ _data, index }) {
  let img_datas = _data.goso_images.slice(0, 6);
  //let img_datas = '/images/thump/human1.jpg';
  let requestStyle = _data.isRequest ? styles.trueReq : styles.falseReq;
  let figure = _data.isRequest ? styles.triangle : styles.square;
  return (
    <div key={index} className={styles.box}>
      <div className={styles.line}>
        <div className={requestStyle}>
          <div className={figure}> </div>
          {_data.isRequest ? '견적요청' : '요청마감'}
        </div>
        <div className={styles.date}>{_data.created_at}</div>
      </div>
      <div>
        <h4 className={styles.category}>{_data.category}</h4>
      </div>
      <div className={styles.img_box} key={index}>
        {img_datas.map((imgData, index) => (
          <img
            //src={imgData.goso_image}
            src="/images/thump/human1.jpg"
            alt="goso_img"
            className={styles.img}
            key={index}
          />
        ))}
      </div>
      <Link
        to="/complete"
        state={{
          quest: _data.choice_question,
          category: _data.category,
          image: _data.image,
          flag: 0,
        }}
      >
        <button className={styles.btn}>자세히 보기</button>
      </Link>
    </div>
  );
}

function ReceivedReport() {
  const [data, setData] = useState();
  const navigate = useNavigate();

  if (localStorage.length === 0) {
    navigate('/login');
  }

  useEffect(() => {
    //fetch('http://localhost:3000/data/hwseol/received_report.json', {
    fetch(`/receive/estimate`, {
      method: 'GET',
      headers: {
        token: localStorage.getItem('access_token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.message !== 'SUCCESS') {
          alert(data.message);
          navigate('/login');
        }
        setData(data.questions);
      });
  }, []);

  if (data === undefined) return true;
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrap}>
          <h1 className={styles.title}>받은 견적</h1>
          {data.map((_data, index) => ReceviedBox({ _data, index }))}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ReceivedReport;
