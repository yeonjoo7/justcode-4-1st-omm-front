import React, { useEffect, useState } from 'react';
import styles from './MasterListHeader.module.scss';
import { BsGrid } from 'react-icons/bs';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { GoLocation } from 'react-icons/go';

import FilteringModal from '../modal/FilteringModal';

const MasterListHeader = props => {
  const {
    masterNumber,
    useSort,
    setUseSort,
    useCategory,
    setUseCategory,
    useAddress,
    setUseAddress,
  } = props;
  const [isModalVisible, setIsModalVisible] = useState({
    type: '',
    visible: false,
  });
  const [categories, setCategories] = useState([]);
  const [address, setAddress] = useState([]);

  useEffect(() => {
    const address = new Promise((resolve, reject) => {
      fetch('/users/address')
        .then(response => {
          return response.json();
        })
        .then(data => {
          const { address } = data;
          resolve(address);
        });
    });
    const categories = new Promise((resolve, reject) => {
      fetch('/category')
        .then(response => response.json())
        .then(data => {
          const { categories } = data;
          resolve(categories);
        });
    });

    Promise.all([address, categories]).then(value => {
      setAddress(value[0]);
      setCategories(value[1]);
    });
  }, []);

  function handleChangeSort(text) {
    setUseSort(text);
  }

  function handleOpenModal(type) {
    setIsModalVisible({ type, visible: true });
  }

  return (
    <>
      <header className={styles.masterListHeader}>
        <div className={styles.headerNav}>
          <h2>고수찾기</h2>
          <span>
            숭고 <IoIosArrowForward size="10px" />{' '}
            {!useAddress ? '지역' : useAddress.name}
            {', '}
            {!useCategory ? '카테고리' : useCategory.name}
          </span>
        </div>
        <div className={styles.headerCategory}>
          <button
            className={styles.addressBtn}
            onClick={() => handleOpenModal('address')}
          >
            <GoLocation className={styles.icon} size="12px" />
            {!useAddress ? '전국' : useAddress.name}
          </button>
          <button
            className={styles.categoryBtn}
            onClick={() => handleOpenModal('category')}
          >
            <BsGrid className={styles.icon} size="12px" />
            {!useCategory ? '서비스 전체' : useCategory.name}
          </button>
        </div>
        <div className={styles.headerSort}>
          <div className={styles.masterCounterWapper}>
            <span>{masterNumber}</span>
            <span> 명의 고수</span>
          </div>
          <div className={styles.dropDownWrapper}>
            <button className={styles.dropDownBtn}>
              {useSort} <IoIosArrowDown />
            </button>
            <div className={styles.dropDownContent}>
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
      {isModalVisible.visible && (
        <FilteringModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          datas={isModalVisible.type === 'address' ? address : categories}
          setUseFilter={
            isModalVisible.type === 'address' ? setUseAddress : setUseCategory
          }
        />
      )}
    </>
  );
};

export default MasterListHeader;
