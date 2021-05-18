import React from 'react';
import CustomFlatList from '../CustomFlatList';
import data from '../utils/data';

const Soups = () => {
  const soups = data.filter(item => item.category === 'soups');
  const {category} = soups[0];

  return (
    <CustomFlatList
      data={soups}
      category={category}
      backgroundColor="#B8EEAC"
      textColor="#842B45"
    />
  );
};
export default Soups;
