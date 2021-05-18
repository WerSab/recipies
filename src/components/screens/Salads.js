import React from 'react';
import data from '../utils/data';
import CustomFlatList from '../CustomFlatList';

const Salads = () => {
  const salads = data.filter(item => item.category === 'salads');
  const {category} = salads[0];

  return (
    <CustomFlatList
      data={salads}
      category={category}
      backgroundColor="#FF5B00"
      textColor="#E9E3E6"
    />
  );
};

export default Salads;
