import styles from './MasterProfile.module.scss';
import { FaStar } from 'react-icons/fa';

function MasterProfile(props) {
  const { master } = props;
  const { review } = master;
  const { lesson_categories } = master;

  return (
    <div className={styles.container}>
      <div className={styles.masterImage}>
        <img
          src={!master ? null : master.userImage}
          alt={!master ? null : master.name}
        />
      </div>
      <div className={styles.masterInfo}>
        <h1>{!master ? null : master.name}</h1>
        <div className={styles.masterCategory}>
          {!lesson_categories ? null : master.lesson_categories[0]}
        </div>
        <div className={styles.masterReview}>
          <span>
            <FaStar size="16px" color="#ffce21" />
          </span>
          <span>{!review ? null : master.review.totalGrade}</span>
          <span>({!review ? 0 : master.review.number})</span>
        </div>
      </div>
    </div>
  );
}

export default MasterProfile;
