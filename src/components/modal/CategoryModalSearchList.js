/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import styles from './CategoryModalSearchList.module.scss';

const CategoryModalSearchList = props => {
  const { datas, useInputText, handleClickLesson } = props;
  let lessons = [];
  datas.forEach(category => {
    category.lessons.forEach(lesson => {
      if (lesson.name.includes(useInputText)) {
        lessons.push({ id: lesson.id, name: lesson.name });
      }
    });
  });

  return (
    <>
      {lessons.length > 0 ? (
        <ul className={styles.categoryModalSearchList}>
          {lessons.map(lesson => {
            return (
              <li key={lesson.id} onClick={() => handleClickLesson(lesson)}>
                <span>{lesson.name}</span>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className={styles.categoryModalSearchNotDefined}>
          <span>"{useInputText}"</span>
          <span>에 해당하는 결과를 찾을 수 없습니다</span>
        </div>
      )}
    </>
  );
};

export default CategoryModalSearchList;
