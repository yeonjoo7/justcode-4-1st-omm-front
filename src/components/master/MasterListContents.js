import React, { useEffect } from 'react';
import styles from './MasterListContents.module.scss';

const MasterListContents = () => {
  useEffect(() => {
    fetch('../data/seonghoson/masters.json')
      .then(response => response.json())
      .then(data => {
        console.log('data >>> ', data);
      });
  }, []);

  return <section>MasterListContents</section>;
};

export default MasterListContents;
