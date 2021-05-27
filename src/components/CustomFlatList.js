import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {recepiesActions} from '../store';
import deleteIcon from '../../assets/icons/delete.png/';

const CustomFlatList = ({
  data,
  category,
  backgroundColor,
  textColor,
  deleteElement,
}) => {
  const deleteAlert = (id, name) => {
  console.log(id);
    Alert.alert(
      "Delete alert",
      `Do You want to delete ${name}?`,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
        {text: 'Ok', onPress: () => deleteElement(id)},
      ]
    )
  };
  const renderItem = element => {
    return (
      <View style={styles.itemContainer} key={element.id.toString()}>
        <Image
          source={{
            uri: element.image,
          }}
          style={styles.image}
        />
        <TouchableOpacity
          onPress={() => Linking.openURL(element.link)}
          style={styles.textContainer}>
          <Text numberOfLines={1} style={[styles.name, {color: textColor}]}>
            {element.name}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=>deleteAlert(element.id, element.name)}
          style={styles.imageContainer}>
          <Image source={deleteIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={[{backgroundColor: backgroundColor}, styles.container]}>
      <FlatList
        data={data}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={(item, index) => index.toString()}
        style={{flex: 1}}
      />
    </View>
  );
};

const mapDispatch = dispatch => ({
  deleteElement: id => dispatch(recepiesActions.deleteElement(id)),
});
export default connect(null, mapDispatch)(CustomFlatList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: '100%',
  },
  image: {height: 70, width: 110, flexBasis: '20%'},
  textContainer: {
    textAlign: 'center',
    flexBasis: '70%',
  },
  name: {
    fontSize: 20,
    letterSpacing: 1,
    paddingHorizontal: 5,
  },
  imageContainer: {
    flexBasis: '10%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  icon: {
    height: 25,
    width: 25,
    tintColor: 'black',
  },
});
