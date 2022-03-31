import ThemaCategory from '../../components/thema_category/ThemaCategory';
import styles from './ThemaCategoryList.module.scss';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ThemaCategoryList() {
  const location = useLocation();
  const [imgAddr, setImgAddr] = useState('');
  const { category } = location.state;

  const settingImg = category => {
    switch (category) {
      case 'lesson':
        setImgAddr('/images/category/lesson_main.jpg');
        break;
      case 'design_develop':
        setImgAddr('/images/category/develop_main.jpg');
        break;
      default:
        setImgAddr('');
    }
  };
  useEffect(() => {
    settingImg(category);
  }, [category]);

  return (
    <div className={styles.container}>
      <div className={styles.imgWrap}>
        <img
          src={imgAddr}
          alt="category_main"
          className={styles.categoryMain}
        />
      </div>
      <ThemaCategory />
      <div>hello</div>
    </div>
  );
}

export default ThemaCategoryList;
