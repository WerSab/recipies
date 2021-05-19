import React from 'react';
import { connect } from 'react-redux';

import CustomFlatList from '../CustomFlatList';
import Header from '../Header';

const Desserts = ({ storeData }) => {
  const desserts = storeData.filter(item => item.category === 'desserts');
  const { category } = desserts[0];
 
  return (
    <>
      <Header category={category} textColor="#E9E3E6" backgroundColor="#DF4343" />
      <CustomFlatList
        data={desserts}
        backgroundColor="#DF4343"
        textColor="#E9E3E6"
      />
    </>
  );
};
const mapState = (state) => ({
  storeData: state.recepies
})

export default connect(mapState)(Desserts);