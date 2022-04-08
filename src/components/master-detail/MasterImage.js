import React, { useState } from 'react';
import styles from './MasterImage.module.scss';

function MasterImage(props) {
  const { master, masterMedia } = props;
  const { master_image, name } = master;

  return (
    <div>
      <h2 ref={masterMedia}>사진/동영상</h2>
      <div className={styles.masterImage}>
        {!master_image
          ? null
          : master_image.map((image, i) => {
              return (
                <div className={styles.imageContainer} key={i}>
                  <div className={styles.imageWrapper}>
                    <img src={image} alt={name} />
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default MasterImage;
