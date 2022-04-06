import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import FilteringModal from '../../components/modal/FilteringModal';

import styles from './MasterProfile.module.scss';

const MasterProfileFetch = props => {
  const [myInfo, setMyInfo] = useState(null);
  const [address, setAddress] = useState(null);

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

    fetch('/users/address')
      .then(response => response.json())
      .then(data => {
        const { address } = data;
        setAddress(address);
      });
  }, []);

  return (
    myInfo && (
      <>
        <Header />
        <MasterProfile myInfo={myInfo} address={address} />
        <Footer />
      </>
    )
  );
};

const MasterProfile = props => {
  const { myInfo, address } = props;
  const mainCategory = myInfo.masterCategories.filter(category => {
    return !!category.isMain;
  })[0];

  const [useName, setUseName] = useState(myInfo.name);
  const [useMainCategory, setUseMainCategory] = useState(mainCategory);
  const [useIntro, setUseIntro] = useState(myInfo.intro);
  const [useAddress, setUseAddress] = useState(myInfo.masterAddress);
  const [isModalVisible, setIsModalVisible] = useState({
    type: '',
    visible: false,
  });

  function handleClickUpdate(title) {
    switch (title) {
      case '이름':
        console.log(useName);
        break;
      case '대표서비스':
        console.log(useMainCategory);
        break;
      case '한줄소개':
        console.log(useIntro);
        break;
      case '활동지역':
        console.log(useAddress);
        break;
      default:
        break;
    }
  }

  console.log('myInfo >> ', myInfo);

  return (
    <main className={styles.masterProfile}>
      <MyProfile myInfo={myInfo} />
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
        title="대표서비스"
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
        title="한줄소개"
        value={myInfo.intro}
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
            <span>{useIntro.length}</span>
            <span>/80자</span>
          </span>
        </div>
      </MyInfo>
      <MyInfo
        title="활동지역"
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
      {/* <MyService/> */}
      {/* <MyImages/> */}
      {/* <MyReviews/>  */}
    </main>
  );
};

const MyProfile = props => {
  const { myInfo } = props;
  return (
    <div className={styles.myProfile}>
      <picture className={styles.profileImageWrapper}>
        <img alt={myInfo.name} src={'..' + myInfo.userImage} />
      </picture>
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
      {isUpdating ? (
        children
      ) : (
        <div className={styles.myInfoValue}>{value}</div>
      )}
    </div>
  );
};

export default MasterProfileFetch;
