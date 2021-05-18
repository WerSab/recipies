import React from 'react';
import data from '../utils/data';
import CustomFlatList from '../CustomFlatList';

const Dinners = () => {
  const dinners = data.filter(item => item.category === 'dinners');
  const {category} = dinners[0];

  return (
    <CustomFlatList
      data={dinners}
      category={category}
      backgroundColor="#D9E1AC"
      textColor="#842B45"
    />
  );
};
export default Dinners;
