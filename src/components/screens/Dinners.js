import React from 'react';
import data from '../utils/data';
import CustomFlatList from '../CustomFlatList';

const Dinners = () => {
  const dinners = data.find(item => item.category === 'dinners');
  const {items, category} = dinners;

  return (
    <CustomFlatList
      data={items}
      category={category}
      backgroundColor="#D9E1AC"
      textColor="#842B45"
    />
  );
};
export default Dinners;
