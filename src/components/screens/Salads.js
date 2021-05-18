import React from 'react';
import data from '../utils/data';
import CustomFlatList from '../CustomFlatList';

const Salads = () => {
  const salads = data.find(item => item.category === 'salads');
  const {items, category} = salads;

  return (
    <CustomFlatList
      data={items}
      category={category}
      backgroundColor="#FF5B00"
      textColor="#E9E3E6"
    />
  );
};

export default Salads;
