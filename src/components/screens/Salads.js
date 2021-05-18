import React from 'react';

import { connect } from 'react-redux'
import CustomFlatList from '../CustomFlatList';
import Header from '../Header'

const Salads = ({ storeData }) => {
  const salads = storeData.filter(item => item.category === 'salads');
  const { category } = salads[0];

  return (
    <>
      <Header
        category={category}
        backgroundColor="#FF5B00"
        textColor="#E9E3E6" />
      <CustomFlatList
        data={salads}
        category={category}
        backgroundColor="#FF5B00"
        textColor="#E9E3E6"
      />
    </>
  );
};

const mapState = (state) => ({
  storeData: state.recepies
})

export default connect(mapState)(Salads);
