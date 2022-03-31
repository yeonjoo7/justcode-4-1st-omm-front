import React, { useState } from 'react';
import styles from './FilteringModal.module.scss';
import { BsXLg, BsList, BsSearch, BsArrowReturnRight } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { GoLocation } from 'react-icons/go';

import CategoryModalSearchList from './CategoryModalSearchList';

const FilteringModal = props => {
  const { datas, isModalVisible, setIsModalVisible, setUseFilter } = props;
  const [useInputText, setUseInputText] = useState('');
  const isAdressType = isModalVisible.type === 'adress';

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

  function handleCilckAdress(adress) {
    setUseFilter(adress);
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
          {isAdressType ? (
            <>
              <GoLocation size="32px" />
              <h4>지역 선택</h4>
            </>
          ) : (
            <>
              <BsList size="32px" />
              <h4>서비스 선택</h4>
            </>
          )}
        </div>
        <div className={styles.modalContent}>
          {!isAdressType && (
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
          {isAdressType ? (
            <div className={styles.modalList}>
              <ul>
                <li onClick={() => handleCilckAdress(null)}>
                  <details>
                    <summary>
                      <span>전국</span>
                    </summary>
                  </details>
                </li>
                {datas.map(adress => {
                  return (
                    <li key={adress.id}>
                      <details>
                        <summary>
                          <span>{adress.name}</span>
                          <IoIosArrowDown size="24px" color="#bfbfbf" />
                        </summary>
                        {adress.details.map(detail => {
                          return (
                            <div
                              key={detail.id}
                              onClick={() => handleCilckAdress(detail)}
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
