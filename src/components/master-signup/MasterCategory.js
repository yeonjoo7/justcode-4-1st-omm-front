import styles from './MasterCategory.module.scss';

function Category() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img
          src="/images/category/lesson.png"
          className={styles.lesson}
          alt="lesson"
        />
        <div className={styles.caption}>레슨</div>
      </div>
      <div className={styles.box}>
        <img
          src="/images/category/home.png"
          className={styles.home}
          alt="home"
        />
        <div className={styles.caption}>홈/리빙</div>
      </div>
      <div className={styles.box}>
        <img
          src="/images/category/event.png"
          className={styles.event}
          alt="event"
        />
        <div className={styles.caption}>이벤트</div>
      </div>
      <div className={styles.box}>
        <img
          src="/images/category/business.png"
          className={styles.business}
          alt="business"
        />
        <div className={styles.caption}>비즈니스</div>
      </div>
      <div className={styles.box}>
        <img
          src="/images/category/design.png"
          className={styles.design}
          alt="design"
        />
        <div className={styles.caption}>디자인</div>
      </div>
      <div className={styles.box}>
        <img
          src="/images/category/health.png"
          className={styles.health}
          alt="health"
        />
        <div className={styles.caption}>건강</div>
      </div>
      <div className={styles.box}>
        <img
          src="/images/category/part_time.png"
          className={styles.partTime}
          alt="part_time"
        />
        <div className={styles.caption}>알바</div>
      </div>
      <div className={styles.box}>
        <img src="/images/category/etc.png" className={styles.etc} alt="etc" />
        <div className={styles.caption}>기타</div>
      </div>
    </div>
  );
}
export default Category;
