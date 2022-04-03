import styles from './ThemaLesson.module.scss';

function ThemaLesson(lesson) {
  // eslint-disable-next-line react/destructuring-assignment
  const lecture = lesson.lesson;
  return (
    <div className={styles.wrap}>
      <img
        src={lecture.lessonImage}
        alt="thema_img"
        className={`${styles.cropping} ${styles.category_img}`}
      />
      <h4 className={styles.category_text}>{lecture.lessonName}</h4>
    </div>
  );
}

function ThemaLessons(lessons) {
  // eslint-disable-next-line react/destructuring-assignment
  const lectures = lessons.lesson;
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {lectures.length !== 0 && lectures.length !== undefined ? (
          lectures.map((lesson, index) => (
            <ThemaLesson lesson={lesson} key={index} />
          ))
        ) : (
          <div>레슨이 없습니다.</div>
        )}
      </div>
    </div>
  );
}

export default ThemaLessons;
