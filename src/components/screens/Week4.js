import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Week4 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Week 4</Text>
      <Text style={styles.text2}></Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DF4343',
  },
  text1: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  text2: {
    color: '#E9E3E6',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1,
    
  },
});
export default Week4;
