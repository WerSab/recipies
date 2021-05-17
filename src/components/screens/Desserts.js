import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import data from '../utils/data';
import styles from './styles';

const Desserts = () => {
  const desserts = data.find(item => item.category === 'desserts');
  const {items, category} = desserts;
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
        <Text style={[styles.name, styles.lightText]}>{element.name}</Text>
      </View>
    );
  };

  console.log('Items : ', items);
  console.log(desserts);
  return (
    <View style={[{backgroundColor: '#DF4343'}, styles.container]}>
      <Text style={[styles.headerText, {color: 'white'}]}>
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
export default Desserts;
