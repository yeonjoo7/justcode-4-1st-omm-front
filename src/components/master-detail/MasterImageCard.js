import React from 'react';
import styles from './MasterImageCard.module.scss';
function MasterImageCard(props) {
  const { master } = props;
  return (
    <div>
      <img className={styles.card} src={master.review.image} />
    </div>
  );
}

export default MasterImageCard;
