import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import FilteringModal from '../../components/modal/FilteringModal';
import {
  TimeDropDown,
  BasicDropDown,
} from '../../components/drop_down/MasterProfileDropDowns';
import MasterCategoryModal from '../../components/modal/MasterCategoryModal';
import timeFormatter from '../../utils/timeFormatter';
import { BsXLg } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';

import styles from './MasterProfile.module.scss';

const MasterProfileFetch = props => {
  const [myInfo, setMyInfo] = useState(null);

  useEffect(() => {
    fetch('/data/seonghoson/master.json')
      .then(response => response.json())
      .then(data => {
        // 리뷰 평점 구하기
        let sum = 0;
        data.reviews.forEach(review => {
          sum = review.grade + sum;
        });
        let reviewAverage = Math.round(sum / data.reviews.length);
        data.reviewAverage = reviewAverage;
        setMyInfo(data);
      });
  }, []);

  return (
    myInfo && (
      <>
        <Header />
        <MasterProfile myInfo={myInfo} />
        <Footer />
      </>
    )
  );
};

const MasterProfile = props => {
  const { myInfo } = props;
  const mainCategory = myInfo.masterCategories.filter(category => {
    return !!category.isMain;
  })[0];

  const [useName, setUseName] = useState(myInfo.name);
  const [useMainCategory, setUseMainCategory] = useState(mainCategory);
  const [useIntro, setUseIntro] = useState(myInfo.intro);
  const [useAddress, setUseAddress] = useState(myInfo.masterAddress);
  const [useStartTime, setUseStartTime] = useState(myInfo.startTime);
  const [useEndTime, setUseEndTime] = useState(myInfo.endTime);
  const [useWorkEx, setUseWorkEx] = useState(myInfo.workExperience);
  const [useEmployeeNum, setUseEmployeeNum] = useState(myInfo.employeeNumber);
  const [useCategories, setUseCategories] = useState(
    myInfo.masterCategories.map(category => {
      return {
        id: category.lesson.id,
        name: category.lesson.name,
      };
    })
  );
  const [isModalVisible, setIsModalVisible] = useState({
    type: '',
    visible: false,
  });

  function handleClickUpdate(title) {
    switch (title) {
      case '이름':
        console.log(useName);
        break;
      case '대표 서비스':
        console.log(useMainCategory);
        break;
      case '한줄 소개':
        console.log(useIntro);
        break;
      case '활동 지역':
        console.log(useAddress);
        break;
      case '연락 가능 시간':
        console.log(useStartTime, useEndTime);
        break;
      case '경력':
        console.log(useWorkEx);
        break;
      case '직원수':
        console.log(useEmployeeNum);
        break;
      case '제공 서비스':
        console.log(useCategories);
        break;
      default:
        break;
    }
  }

  console.log('myInfo >> ', myInfo);

  return (
    <main className={styles.masterProfile}>
      <div className={styles.masterProfileHeader}>
        <MyProfile myInfo={myInfo} />
      </div>
      <div className={styles.masterProfileContents}>
        <MyInfo
          title="이름"
          value={myInfo.name}
          handleClickUpdate={handleClickUpdate}
        >
          <div className={styles.myInfoNameInput}>
            <input
              type="text"
              maxLength="30"
              defaultValue={myInfo.name}
              placeholder="이름 또는 업체명을 입력하세요"
              onChange={e => {
                setUseName(e.target.value);
              }}
            />
            <span className={styles.textCounter}>
              <span>{useName.length}</span>
              <span>/30자</span>
            </span>
          </div>
        </MyInfo>
        <MyInfo
          title="대표 서비스"
          value={mainCategory.lesson.name}
          handleClickUpdate={handleClickUpdate}
        >
          <div className={styles.myInfoMainCategoryWrap}>
            {myInfo.masterCategories.map(category => {
              return (
                <div
                  className={
                    useMainCategory.id === category.id
                      ? styles.mainCategoryColor
                      : ''
                  }
                  key={category.id}
                >
                  <button
                    onClick={() => setUseMainCategory(category)}
                    value={category.id}
                  >
                    {category.lesson.name}
                  </button>
                </div>
              );
            })}
          </div>
        </MyInfo>
        <MyInfo
          title="한줄 소개"
          value={myInfo.intro ? myInfo.intro : ''}
          handleClickUpdate={handleClickUpdate}
        >
          <div className={styles.myInfoIntroInput}>
            <textarea
              rows="6"
              defaultValue={myInfo.intro}
              onChange={e => {
                setUseIntro(e.target.value);
              }}
              placeholder="고수 자신에 대한 소개"
              maxLength="80"
            />
            <span className={styles.textCounter}>
              <span>{useIntro?.length ? useIntro.length : 0}</span>
              <span>/80자</span>
            </span>
          </div>
        </MyInfo>
        <MyInfo
          title="활동 지역"
          value={`${myInfo.masterAddress.name} ${myInfo.masterAddress.details.name}`}
          handleClickUpdate={handleClickUpdate}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        >
          <div className={styles.myInfoAddressSelector}>
            <button
              onClick={() =>
                setIsModalVisible({ type: 'address', visible: true })
              }
            >
              {`${myInfo.masterAddress.name} ${myInfo.masterAddress.details.name}`}
            </button>
            {isModalVisible.visible && (
              <FilteringModal
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                setUseFilter={setUseAddress}
              />
            )}
          </div>
        </MyInfo>
        <MyInfo
          title="연락 가능 시간"
          value={`${timeFormatter.getFormatedHours(
            myInfo.startTime
          )} - ${timeFormatter.getFormatedHours(myInfo.endTime)}`}
          handleClickUpdate={handleClickUpdate}
        >
          <TimeDropDown time={useStartTime} setTime={setUseStartTime} />
          <span className={styles.timeSplit}>부터</span>
          <TimeDropDown time={useEndTime} setTime={setUseEndTime} />
          <span className={styles.timeSplit}>까지</span>
        </MyInfo>
        <MyInfo
          title="경력"
          value={myInfo.workExperience ? `${myInfo.workExperience}년 이상` : ''}
          handleClickUpdate={handleClickUpdate}
        >
          <BasicDropDown
            value={useWorkEx}
            setValue={setUseWorkEx}
            options={new Array(1, 2, 3, 4, 5, 10, 15, 20, 30)}
          >
            <span style={{ marginRight: '3px' }}>경력</span>
            <span>년</span>
          </BasicDropDown>
        </MyInfo>
        <MyInfo
          title="직원수"
          value={myInfo.employeeNumber ? `${myInfo.employeeNumber}명 이상` : ''}
          handleClickUpdate={handleClickUpdate}
        >
          <BasicDropDown
            value={useEmployeeNum}
            setValue={setUseEmployeeNum}
            options={new Array(1, 2, 3, 4, 5, 10, 15, 20, 30, 40, 50)}
          >
            <span style={{ marginRight: '3px' }}>직원</span>
            <span>명</span>
          </BasicDropDown>
        </MyInfo>
        <MyService
          title="제공 서비스"
          data={myInfo.masterCategories}
          handleClickUpdate={handleClickUpdate}
          useCategories={useCategories}
          setUseCategories={setUseCategories}
        />
        <MyPosts
          title="사진 및 동영상"
          // data={myInfo.mase}
        />
        {/* <MyReviews/>  */}
      </div>
    </main>
  );
};

const MyPosts = props => {
  const { title, children, value } = props;
  const [isUpdating, setIsUpdating] = useState(false);
  return (
    <div className={styles.myInfo}>
      <div className={styles.myInfoTitle}>
        <span>{title}</span>
      </div>
      {isUpdating ? (
        children
      ) : (
        <div className={styles.myInfoValue}>{value}</div>
      )}
    </div>
  );
};
const MyProfile = props => {
  const { myInfo } = props;
  return (
    <div className={styles.myProfile}>
      <picture className={styles.profileImageWrapper}>
        <img alt={myInfo.name} src={'..' + myInfo.userImage} />
      </picture>
      <div className={styles.profileSomeWrapper}>
        <div className={styles.profileSomeCounts}>
          <div>
            <span>{myInfo.reviewAverage}</span>
            <span>리뷰 평점</span>
          </div>
          <div>
            <span>{myInfo.reviews.length}</span>
            <span>리뷰 수</span>
          </div>
          <div>
            <span>{'0'}</span>
            <span>고용수</span>
          </div>
        </div>
        <div className={styles.profileServiceWrapper}>
          <div className={styles.profileActiveAssay}>
            <span>활동분석</span>
          </div>
          <div className={styles.profilePreview}>
            <span>미리보기</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const MyInfo = props => {
  const { children, title, value, handleClickUpdate } = props;
  const [isUpdating, setIsUpdating] = useState(false);
  return (
    <div className={styles.myInfo}>
      <div className={styles.myInfoTitle}>
        <span>{title}</span>
        <span
          style={{ color: !value || isUpdating ? '#ff3131' : '' }}
          onClick={() => {
            setIsUpdating(!isUpdating);
            if (isUpdating) {
              handleClickUpdate(title);
            }
          }}
        >
          {!value ? '등록하기' : isUpdating ? '저장' : '수정'}
        </span>
      </div>
      {isUpdating ? (
        children
      ) : (
        <div className={styles.myInfoValue}>{value}</div>
      )}
    </div>
  );
};

const MyService = props => {
  const { title, data, handleClickUpdate, useCategories, setUseCategories } =
    props;
  const [isUpdating, setIsUpdating] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleCateRemove(lesson) {
    let setArr = useCategories.filter(item => {
      return item.id !== lesson.id;
    });
    setUseCategories(setArr);
  }
  return (
    <div className={styles.myInfo}>
      <div className={styles.myInfoTitle}>
        <span>{title}</span>
        <span
          style={{ color: isUpdating ? '#ff3131' : '' }}
          onClick={() => {
            setIsUpdating(!isUpdating);
            if (isUpdating) {
              handleClickUpdate(title);
            }
          }}
        >
          {isUpdating ? '저장' : '수정'}
        </span>
      </div>
      <div className={styles.myServiceWrap}>
        {isUpdating ? (
          <>
            <div
              className={styles.addServiceBtn}
              onClick={() => setIsModalVisible(true)}
            >
              <FiPlus size="18px" />
              <span>서비스 추가</span>
            </div>
            {useCategories.map(lesson => {
              return (
                <div
                  className={styles.myServiceList}
                  key={lesson.id}
                  onClick={() => handleCateRemove(lesson)}
                >
                  <span value={lesson.id}>{lesson.name}</span>
                  <BsXLg size="12px" color="#796c6c70" />
                </div>
              );
            })}
          </>
        ) : (
          data.map(category => {
            return (
              <div className={styles.myServiceList} key={category.lesson.id}>
                <span value={category.lesson.id}>{category.lesson.name}</span>
              </div>
            );
          })
        )}
      </div>
      {isModalVisible && (
        <MasterCategoryModal
          useCategories={useCategories}
          setUseCategories={setUseCategories}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}
    </div>
  );
};

export default MasterProfileFetch;
