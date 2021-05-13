import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Moje przepisy</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#8DB32E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});
export default Header;
