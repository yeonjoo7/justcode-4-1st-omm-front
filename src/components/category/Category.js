import styles from './Category.module.scss';

function Category() {
  return (
    <div className={styles.container}>
      <div>
        <img
          src="/images/category/lesson.png"
          className={styles.lesson}
          alt="lesson"
        />
      </div>
      <div>
        <img
          src="/images/category/home.png"
          className={styles.home}
          alt="home"
        />
      </div>
      <div>
        <img
          src="/images/category/event.png"
          className={styles.event}
          alt="event"
        />
      </div>
      <div>
        <img
          src="/images/category/business.png"
          className={styles.business}
          alt="business"
        />
      </div>
      <div>
        <img
          src="/images/category/design.png"
          className={styles.design}
          alt="design"
        />
      </div>
      <div>
        <img
          src="/images/category/health.png"
          className={styles.health}
          alt="health"
        />
      </div>
      <div>
        <img
          src="/images/category/part_time.png"
          className={styles.partTime}
          alt="part_time"
        />
      </div>
      <div>
        <img src="/images/category/etc.png" className={styles.etc} alt="etc" />
      </div>
    </div>
  );
}
export default Category;
