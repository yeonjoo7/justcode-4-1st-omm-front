import { useState, useEffect } from 'react';

function ThemaLesson() {
  const [lessons, setLessons] = useState();
  /*
  useEffect(() => {
    fetch('http://localhost:3000/data/hwseol/thema_category_list.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {});

  }, []);
  */
  return <div></div>;
}

export default ThemaLesson;
