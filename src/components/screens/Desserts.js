import React from 'react';
import data from '../utils/data';
import CustomFlatList from '../CustomFlatList';
import Header from '../Header';
const Desserts = () => {
  const desserts = data.filter(item => item.category === 'desserts');
  const {category} = desserts[0];
  console.log(desserts);
  return (
    <>
      <Header category={category} textColor="#E9E3E6" />
      <CustomFlatList
        data={desserts}
        backgroundColor="#DF4343"
        textColor="#E9E3E6"
      />
    </>
  );
};
export default Desserts;
