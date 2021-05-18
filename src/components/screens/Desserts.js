import React from 'react';
import data from '../utils/data';
import CustomFlatList from '../CustomFlatList';

const Desserts = () => {
  const desserts = data.find(item => item.category === 'desserts');
  const {items, category} = desserts;

  return (
    <CustomFlatList
      data={items}
      category={category}
      backgroundColor="#DF4343"
      textColor="#E9E3E6"
    />
  );
};
export default Desserts;
