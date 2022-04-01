import React from 'react';
import styles from './MasterReview.module.scss';

function MasterReview(props) {
  const { master } = props;
  return (
    <div>
      <h2>리뷰</h2>
      <div>{master.masterReview}</div>
    </div>
  );
}

export default MasterReview;
