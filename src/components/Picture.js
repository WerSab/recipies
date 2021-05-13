import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import saladImage from '../../assets/salad.jpg';
const Picture = () => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={saladImage} resizeMode="contain" />
    </View>
  );
};



const styles = StyleSheet.create({
  imageContainer: {
      flex: 5,
  },
  image: {
    zIndex: -1,
    // height: 580,
  },
});
export default Picture;
