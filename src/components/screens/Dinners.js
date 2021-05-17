import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import data from '../utils/data';
import styles from './styles';

const Dinners = () => {
  const dinners = data.find(item => item.category === 'dinners');
  const {items, category} = dinners;
  const [{id, name, image, link}] = items;

  const renderItem = element => {
    return (
      <View style={styles.itemContainer} key={element.id.toString()}>
        <Image
          source={{
            uri: element.image,
          }}
          style={styles.image}
        />
        <Text style={[styles.name, styles.darkText]}>{element.name}</Text>
      </View>
    );
  };

  console.log('Items: ', items);
  console.log(dinners);
  return (
    <View style={[{backgroundColor: '#D9E1AC'}, styles.container]}>
      <Text style={[styles.headerText, {color: '#842B45'}]}>
        {category.toUpperCase()}
      </Text>
      <FlatList
        data={items}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: '100%',
          minHeight: '100%',
        }}
      />
    </View>
  );
};
export default Dinners;
