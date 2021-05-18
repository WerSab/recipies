import React, {useState} from 'react';
import {SafeAreaView, StatusBar, TextInput} from 'react-native';
import Header from './Header';
import Picture from './Picture';
import CustomFlatList from './CustomFlatList';
import data from './utils/data';

const Main = () => {
  const [text, setText] = useState("");
console.log(data);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>

      <StatusBar />
      {/* <Header /> */}
      {/* <Picture /> */}
      <TextInput
      onChangeText={setText}
      value={text}
      />
     
        <CustomFlatList
        data={data}
        category="Recipies"
        backgroundColor="#D9E1AC"
        textColor="#842B45"
      />
    </SafeAreaView>
  );
};
export default Main;
