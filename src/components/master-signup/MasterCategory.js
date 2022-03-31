import styles from './MasterCategory.module.scss';
import { useNavigate, useParams } from 'react-router-dom';

function MasterCategory() {
  const navigate = useNavigate();
  const nextMasterPage = url => {
    navigate(url);
  };
  //const params = useParams();

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h3>고수로 가입하실 분야를 선택하세요</h3>
        <div className={styles.icons}>
          <div className={styles.box}>
            <img
              src="/images/category/lesson.png"
              className={styles.lesson}
              alt="lesson"
              onClick={() => nextMasterPage('/pro/lesson')}
            />
            <div className={styles.caption}>레슨</div>
          </div>
          <div className={styles.box}>
            <img
              src="/images/category/home.png"
              className={styles.home}
              alt="home"
              onClick={() => nextMasterPage('/pro/home')}
            />
            <div className={styles.caption}>홈/리빙</div>
          </div>
          <div className={styles.box}>
            <img
              src="/images/category/event.png"
              className={styles.event}
              alt="event"
              onClick={() => nextMasterPage('/pro/event')}
            />
            <div className={styles.caption}>이벤트</div>
          </div>
          <div className={styles.box}>
            <img
              src="/images/category/business.png"
              className={styles.business}
              alt="business"
              onClick={() => nextMasterPage('/pro/business')}
            />
            <div className={styles.caption}>비즈니스</div>
          </div>
          <div className={styles.box}>
            <img
              src="/images/category/design.png"
              className={styles.design}
              alt="design"
              onClick={() => nextMasterPage('/pro/design')}
            />
            <div className={styles.caption}>디자인</div>
          </div>
          <div className={styles.box}>
            <img
              src="/images/category/health.png"
              className={styles.health}
              alt="health"
              onClick={() => nextMasterPage('/pro/health')}
            />
            <div className={styles.caption}>건강</div>
          </div>
          <div className={styles.box}>
            <img
              src="/images/category/part_time.png"
              className={styles.partTime}
              alt="part_time"
              onClick={() => nextMasterPage('/pro/part_time')}
            />
            <div className={styles.caption}>알바</div>
          </div>
          <div className={styles.box}>
            <img
              src="/images/category/etc.png"
              className={styles.etc}
              alt="etc"
              onClick={() => nextMasterPage('/pro/etc')}
            />
            <div className={styles.caption}>기타</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MasterCategory;
