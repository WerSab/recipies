import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, TextInput } from 'react-native';
import { connect } from 'react-redux';

import CustomFlatList from './CustomFlatList';
import data from './utils/data';
import { recepiesActions } from '../store'

const Main = ({ setData, storeData }) => {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = () => {
      const recepies = data;
      setData(recepies)
      setIsLoading(false)
    }
    getData()
  }, [setData])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <TextInput
        onChangeText={setText}
        value={text}
      />
      <CustomFlatList
        data={storeData}
        category="Recipies"
        backgroundColor="#D9E1AC"
        textColor="#842B45"
      />
    </SafeAreaView>
  )
}

const mapState = (state) => ({
  storeData: state.recepies
})

const mapDispatch = (dispatch) => ({
  setData: (data) => dispatch(recepiesActions.setData(data))
})

export default connect(mapState, mapDispatch)(Main);
