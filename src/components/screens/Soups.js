import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import data from '../utils/data';
import styles from './styles';

const Soups = () => {
  const soups = data.find(item => item.category === 'soups');
  const {items, category} = soups;
  const {id, name, image, link} = items;

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

  console.log('Items : ', items);
  console.log(soups);
  return (
    <View style={[{backgroundColor: '#B8EEAC'}, styles.container]}>
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
export default Soups;
