import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';

const CustomFlatList = ({data, category, backgroundColor, textColor}) => {
//   const [{id, name, image, link}] = data;

  const renderItem = element => {
    return (
      <View style={styles.itemContainer} key={element.id.toString()}>
        <Image
          source={{
            uri: element.image,
          }}
          style={styles.image}
        />
        <Text style={[styles.name, {color: textColor}]}>{element.name}</Text>
      </View>
    );
  };
  return (
    <View style={[{backgroundColor: backgroundColor}, styles.container]}>
      <Text style={[styles.headerText, {color: textColor}]}>
        {category.toUpperCase()}
      </Text>
      <FlatList
        data={data}
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
export default CustomFlatList;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  },
  image: {height: 80, width: 120, flexBasis: '40%'},
  lightText: {
    color: '#E9E3E6',
  },
  darkText: {
    color: '#842B45',
  },
  name: {
    fontSize: 26,
    letterSpacing: 1,
    textAlign: 'left',
    flexBasis: '60%',
    textAlign: 'left',
    marginLeft: 15,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    paddingVertical: 20,
    fontSize: 28,
    letterSpacing: 1,
  },
});
