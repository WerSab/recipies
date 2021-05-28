import React from 'react';

import { connect } from 'react-redux'
import CustomFlatList from '../CustomFlatList';
import Header from '../Header'

const Soups = ({ recepies }) => {
  const soups = recepies.filter(item => item.category === 'soups');
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
        withSearchbar={false}
      />
    </>
  );
};

const mapState = (state) => ({
  recepies: state.recepies
})


export default connect(mapState)(Soups);
