import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Header from './Header';
import Picture from './Picture';

const Main = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
      <StatusBar />
      <Header />
      <Picture />
    </SafeAreaView>
  );
};
export default Main;
