import React, { useState, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
  Modal,
  Text,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import { Picker } from '@react-native-picker/picker';

import CustomFlatList from './CustomFlatList';
import { recepiesActions } from '../store';
import addIcon from '../../assets/icons/add.png';
import moreIcon from '../../assets/icons/more.png';

//Komponent- propsy
const Main = ({ recepies, addRecepie, navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const [linkInput, setLinkInput] = useState('');
  const [selectedValue, setSelectedValue] = useState('Dinners');

  const clearInputs = () => {
    setNameInput('')
    setUrlInput('')
    setLinkInput('')
  }

  const setRecepieToDB = () => {
    // let items = [...recepies]
    let itemToSet = {
      id: recepies.length,
      category: selectedValue,
      name: nameInput,
      image: urlInput,
      link: linkInput,
    }
    // items.push(itemToSet)
    addRecepie(itemToSet)
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isModalVisible && (
        <Modal
          animationType="slide"
          transparent={true}
          onRequestClose={() => setIsModalVisible(false)}
          onBackdropPress={() => setIsModalVisible(false)}
          onBackButtonPress={() => setIsModalVisible(false)}>
          <View style={styles.centeredView}>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 150 }}
              onValueChange={itemValue => setSelectedValue(itemValue)}>
              <Picker.Item label="Dinners" value="dinners" />
              <Picker.Item label="Desserts" value="desserts" />
              <Picker.Item label="Salads" value="salads" />
              <Picker.Item label="Soups" value="soups" />
            </Picker>
            <TextInput
              style={styles.input}
              onChangeText={setNameInput}
              value={nameInput}
              placeholder="Nazwa dania..."
            />
            <TextInput
              style={styles.input}
              onChangeText={setUrlInput}
              value={urlInput}
              placeholder="Adres obrazka..."
            />
            <TextInput
              style={styles.input}
              onChangeText={setLinkInput}
              value={linkInput}
              placeholder="Link do strony..."
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '100%',
              }}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setIsModalVisible(!isModalVisible);
                  setNameInput('');
                }}>
                <Text style={styles.textStyle}>Close</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.buttonSafe]}
                onPress={() => {
                  setIsModalVisible(!isModalVisible);
                  clearInputs();
                  setRecepieToDB();
                }}>
                <Text style={styles.textStyle}>Safe</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image style={styles.icon} source={moreIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <Image style={styles.icon} source={addIcon} />
          </TouchableOpacity>
        </View>
        <CustomFlatList
          data={recepies}
          category="Recipies"
          backgroundColor="#D9E1AC"
          textColor="#842B45"
        />
      </SafeAreaView>
    </View>
  );
};

const mapState = state => ({
  recepies: state.recepies,
});

const mapDispatch = dispatch => ({
  // setData: data => dispatch(recepiesActions.setData(data)),
  addRecepie: data => dispatch(recepiesActions.addRecepie(data))
});

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#94B444',
  },
  icon: {
    height: 50,
    width: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    margin: '10%',
  },
  button: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 2,
    width: 120,
  },
  buttonClose: {
    backgroundColor: '#CCCCCC',
  },
  buttonSafe: {
    backgroundColor: '#94B444',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: '90%',
    marginLeft: 4,
  },
});

export default connect(mapState, mapDispatch)(Main);
