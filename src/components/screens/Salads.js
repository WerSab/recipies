import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import data from '../utils/data';
import styles from './styles';

const Salads = () => {
  const salads = data.find(item => item.category === 'salads');
  const {items, category} = salads;
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
  console.log(salads);
  return (
    <View style={[{backgroundColor: '#FF5B00'}, styles.container]}>
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

export default Salads;
