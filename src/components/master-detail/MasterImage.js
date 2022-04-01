import React, { useState } from 'react';
import styles from './MasterImage.module.scss';
import MasterImageCard from 'src/components/master-detail/MasterImageCard';

function MasterImage(props) {
  // image map
  const { master } = props;
  const [image, setImage] = useState({});

  return (
    <div>
      <h2>사진/동영상</h2>
      <div className={styles.masterImage}>{}</div>
    </div>
  );
}

export default MasterImage;
