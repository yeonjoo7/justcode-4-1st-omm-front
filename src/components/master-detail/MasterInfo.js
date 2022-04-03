import React from 'react';
import {
  FaUser,
  FaTrophy,
  FaLocationArrow,
  FaClock,
  FaCreditCard,
  FaBriefcase,
  FaUsers,
  FaRegFileAlt,
  FaAward,
} from 'react-icons/fa';
import styles from './MasterInfo.module.scss';

function MasterInfo(props) {
  const { master } = props;
  const { review } = master;
  return (
    <div className={styles.masterInfoContainer}>
      <div className={styles.infoBox}>
        <h2>기본정보</h2>
        <div>
          <div>
            <FaUser />
            <span>본인 인증</span>
          </div>
          <div>
            <FaTrophy />
            <span>{!review ? null : review.number} 회 고용됨</span>
          </div>
          <div>
            <FaLocationArrow />
            <span>
              {master.address} {master.address_detail}
            </span>
          </div>
          <div>
            <FaClock />
            <span>
              {master.start_time} - {master.end_time}
            </span>
          </div>
          <div>
            <FaCreditCard />
            <span>숨고페이, 카드결제, 계좌이체, 현금결제 가능</span>
          </div>
        </div>
      </div>
      <div className={styles.infoBox}>
        <h2>추가정보</h2>
        <div>
          <div>
            <FaBriefcase />
            <span>경력 {master.work_experience}</span>
          </div>
          <div>
            <FaUsers />
            <span>직원 수 {master.employee_number} </span>
          </div>
          <div>
            <FaRegFileAlt />
            <span>사업자등록증 등록완료</span>
          </div>
          <div>
            <FaAward />
            <span>자격증 등록완료</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MasterInfo;
