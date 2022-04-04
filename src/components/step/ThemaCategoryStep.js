import React, { useState, useEffect } from 'react';
import styles from './ThemaCategoryStep.module.scss';

const Step = ({ question, onChange, questNum }) => {
  const quest = question;

  if (quest === undefined) return true;
  return (
    <div className={styles.step1_container}>
      <h4 className={styles.small_headline}>{quest.description}</h4>
      {quest.choiceDescription.map((choice, index) => {
        return (
          <div
            className={styles.radio_div}
            key={index + Number(quest.questionNumber) * 10}
          >
            <input
              type="radio"
              name={quest.questionNumber}
              value={quest.choiceQuestionId[index]}
              onChange={e => onChange(e)}
              defaultChecked={
                quest.choiceQuestionId[index] ===
                Number(questNum[quest.questionNumber])
              }
            />
            <label htmlFor="label">{choice}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Step;
