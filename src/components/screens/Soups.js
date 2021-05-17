import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Soups = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Soups</Text>
      <Text style={styles.text2}></Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B8EEAC',
  },
  text1: {
    color: '#8E3B53',
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
export default Soups;
