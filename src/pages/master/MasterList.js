import React, { useState, useEffect } from 'react';
import MasterListHeader from '../../components/master/MasterListHeader';
import MasterListContents from '../../components/master/MasterListContents';
import styles from './MasterList.module.scss';
import Header from '../../components/header/Header';

const MasterList = () => {
  const [masters, setMasters] = useState([]);
  const [useCategory, setUseCategory] = useState(null);
  const [useAdress, setUseAdress] = useState(null);
  const [useSort, setUseSort] = useState('리뷰순');

  useEffect(() => {
    fetch('../data/seonghoson/masters.json')
      .then(response => response.json())
      .then(data => {
        setMasters(data);
      });
  }, []);

  return (
    <>
      <Header />
      <main className={styles.masterList}>
        <MasterListHeader
          masterNumber={masters.length}
          useSort={useSort}
          setUseSort={setUseSort}
          useCategory={useCategory}
          setUseCategory={setUseCategory}
          useAdress={useAdress}
          setUseAdress={setUseAdress}
        />
        <MasterListContents masters={masters} />
      </main>
    </>
  );
};

export default MasterList;
