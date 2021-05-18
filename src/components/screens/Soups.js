import React from 'react';

import { connect } from 'react-redux'
import CustomFlatList from '../CustomFlatList';
import Header from '../Header'

const Soups = ({ storeData }) => {
  const soups = storeData.filter(item => item.category === 'soups');
  const { category } = soups[0];

  return (
    <>
      <Header
        category={category}
        backgroundColor='#B8EEAC'
        textColor="#842B45" />
      <CustomFlatList
        data={soups}
        category={category}
        backgroundColor="#B8EEAC"
        textColor="#842B45"
      />
    </>
  );
};

const mapState = (state) => ({
  storeData: state.recepies
})


export default connect(mapState)(Soups);
