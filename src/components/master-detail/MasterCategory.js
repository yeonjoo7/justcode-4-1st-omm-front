import React from 'react';

function MasterCategory(props) {
  const { master } = props;
  return (
    <div>
      <h2>제공 서비스</h2>
      <div>{master.lessonCategory}</div>
    </div>
  );
}

export default MasterCategory;
