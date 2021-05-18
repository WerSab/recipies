import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Header = ({textColor, category, backgroundColor}) => {
  return (
    <View style={[styles.header, {backgroundColor: backgroundColor}]}>
      <Text style={[styles.headerText, {color: textColor}]}>
        {category?.toUpperCase()}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    paddingVertical: 20,
    fontSize: 28,
    letterSpacing: 1,
  },
});
export default Header;
