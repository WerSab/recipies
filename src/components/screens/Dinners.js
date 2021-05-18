import React from 'react';

import { connect } from 'react-redux'
import CustomFlatList from '../CustomFlatList';
import Header from '../Header'

const Dinners = ({ storeData }) => {
  const dinners = storeData.filter(item => item.category === 'dinners');
  const { category } = dinners[0];

  return (
    <>
      <Header category={category} backgroundColor="#D9E1AC"
        textColor="#842B45" />
      <CustomFlatList
        data={dinners}
        category={category}
        backgroundColor="#D9E1AC"
        textColor="#842B45"
      />
    </>
  );
};

const mapState = (state) => ({
  storeData: state.recepies
})
export default connect(mapState)(Dinners);
