import React from 'react';
import MasterListHeader from '../../components/master/MasterListHeader';
import MasterListContents from '../../components/master/MasterListContents';
import styles from './MasterList.module.scss';

const MasterList = () => {
  return (
    <main className={styles.MasterList}>
      <MasterListHeader />
      <MasterListContents />
    </main>
  );
};

export default MasterList;
