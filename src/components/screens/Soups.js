import React from 'react';
import CustomFlatList from '../CustomFlatList';
import data from '../utils/data';

const Soups = () => {
  const soups = data.find(item => item.category === 'soups');
  const {items, category} = soups;

  return (
    <CustomFlatList
      data={items}
      category={category}
      backgroundColor="#B8EEAC"
      textColor="#842B45"
    />
  );
};
export default Soups;
