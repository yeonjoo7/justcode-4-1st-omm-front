import React, { useState } from 'react';
import styles from './MasterListHeader.module.scss';
import { Modal } from 'antd';
import { BsGrid } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';

const MasterListHeader = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [sort, setSort] = useState('리뷰순');

  function handleChangeSort(text) {
    setSort(text);
  }
  return (
    <>
      <header className={styles.MasterListHeader}>
        <div className={styles.HeaderNav}>
          <h2>고수찾기</h2>
          <span>
            숨고 {'>'} {'카테고리'}
          </span>
        </div>
        <div className={styles.HeaderCategory}>
          <button
            className={styles.CategoryBtn}
            onClick={() => setIsModalVisible(!isModalVisible)}
          >
            <BsGrid className={styles.GridIcon} size="12px" />
            서비스 전체
          </button>
        </div>
        <div className={styles.HeaderSort}>
          <div className={styles.MasterCounterWapper}>
            <span>{'102,320'}</span>
            <span> 명의 고수</span>
          </div>
          <div className={styles.DropDownWrapper}>
            <button className={styles.DropDownBtn}>
              {sort} <RiArrowDropDownLine />
            </button>
            <div className={styles.DropDownContent}>
              <span onClick={e => handleChangeSort(e.target.innerText)}>
                리뷰순
              </span>
              <span onClick={e => handleChangeSort(e.target.innerText)}>
                최신순
              </span>
            </div>
          </div>
        </div>
      </header>
      <Modal
        title="서비스 선택"
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        footer={false}
      />
    </>
  );
};

export default MasterListHeader;
