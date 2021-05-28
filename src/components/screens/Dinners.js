import React from 'react';

import { connect } from 'react-redux'
import CustomFlatList from '../CustomFlatList';
import Header from '../Header'

const Dinners = ({ recepies }) => {
  const dinners = recepies.filter(item => item.category === 'dinners');
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
        withSearchbar={false}
      />
    </>
  );
};

const mapState = (state) => ({
  recepies: state.recepies
})
export default connect(mapState)(Dinners);
