import React, { useState } from 'react';
import styles from './FilteringModal.module.scss';
import { BsXLg, BsList, BsSearch, BsArrowReturnRight } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { GoLocation } from 'react-icons/go';

import CategoryModalSearchList from './CategoryModalSearchList';

const FilteringModal = props => {
  const { datas, isModalVisible, setIsModalVisible, setUseFilter } = props;
  const [useInputText, setUseInputText] = useState('');
  const isAddressType = isModalVisible.type === 'address';

  function handleCancleModal() {
    setIsModalVisible(false);
    handleCloseDetails();
  }

  function handleClickLesson(lesson) {
    if (useInputText !== '') {
      setUseInputText('');
    }
    setUseFilter(lesson);
    setIsModalVisible(false);
    handleCloseDetails();
  }

  function handleChangeInput(e) {
    setUseInputText(e.target.value);
  }

  function handleCilckAddress(address) {
    setUseFilter(address);
    setIsModalVisible(false);
    handleCloseDetails();
  }

  function handleCloseDetails() {
    const details = document.querySelectorAll('details');
    details.forEach(detail => {
      detail.removeAttribute('open');
    });
  }

  return (
    <div
      className={`${styles.modalMain} ${
        isModalVisible.visible && styles.modalVisible
      }`}
    >
      <div className={styles.modalWrapper}>
        <div className={styles.modalCloseBtn}>
          <BsXLg
            color="#bfbfbf"
            size="18px"
            style={{ cursor: 'pointer' }}
            onClick={handleCancleModal}
          />
        </div>
        <div className={styles.modalHeader}>
          {isAddressType ? (
            <>
              <GoLocation size="24px" />
              <h4>지역 선택</h4>
            </>
          ) : (
            <>
              <BsList size="24px" />
              <h4>서비스 선택</h4>
            </>
          )}
        </div>
        <div className={styles.modalContent}>
          {!isAddressType && (
            <div className={styles.modalSearch}>
              <BsSearch />
              <input
                type="text"
                value={useInputText}
                onChange={handleChangeInput}
                placeholder="어떤 분야의 전문가를 찾으시나요?"
              />
            </div>
          )}
          {isAddressType ? (
            <div className={styles.modalList}>
              <ul>
                <li onClick={() => handleCilckAddress(null)}>
                  <details>
                    <summary>
                      <span>전국</span>
                    </summary>
                  </details>
                </li>
                {datas.map(address => {
                  return (
                    <li key={address.id}>
                      <details>
                        <summary>
                          <span>{address.name}</span>
                          <IoIosArrowDown size="24px" color="#bfbfbf" />
                        </summary>
                        {address.details.map(detail => {
                          return (
                            <div
                              key={detail.id}
                              onClick={() => handleCilckAddress(detail)}
                            >
                              <BsArrowReturnRight color="#bfbfbf" />
                              <span>{detail.name}</span>
                            </div>
                          );
                        })}
                      </details>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <div className={styles.modalList}>
              {useInputText === '' ? (
                <ul>
                  <li onClick={() => handleClickLesson(null)}>
                    <details>
                      <summary>
                        <span>서비스 전체</span>
                      </summary>
                    </details>
                  </li>
                  {datas.map(category => {
                    return (
                      <li key={category.id}>
                        <details>
                          <summary>
                            <span>{category.name}</span>
                            <IoIosArrowDown size="24px" color="#bfbfbf" />
                          </summary>
                          {category.lessons.map(lesson => {
                            return (
                              <div
                                key={lesson.id}
                                onClick={() => handleClickLesson(lesson)}
                              >
                                <BsArrowReturnRight color="#bfbfbf" />
                                <span>{lesson.name}</span>
                              </div>
                            );
                          })}
                        </details>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <CategoryModalSearchList
                  useInputText={useInputText}
                  setUseInputText={setUseInputText}
                  datas={datas}
                  handleClickLesson={handleClickLesson}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilteringModal;
