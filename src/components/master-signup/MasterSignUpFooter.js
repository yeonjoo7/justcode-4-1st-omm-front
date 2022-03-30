import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MasterSignUpFooter.module.scss';

function MasterSignUpFooter({ setFormRender, renderLength, pageNumber }) {
  const [next, setNext] = useState('다음');
  const navigate = useNavigate();
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.btnWrapper}>
        <button
          className={styles.btnPrev}
          onClick={() => setFormRender(prev => (prev === 0 ? prev : prev - 1))}
        >
          이전
        </button>
        <button
          className={styles.btnNext}
          onClick={() => {
            setFormRender(prev => (prev === renderLength ? prev : prev + 1));
          }}
        >
          {pageNumber === renderLength ? '가입하기' : next}
        </button>
      </div>
    </div>
  );
}

export default MasterSignUpFooter;
