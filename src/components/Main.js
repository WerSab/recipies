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

import CustomFlatList from './CustomFlatList';
import { setToDatabase, returnData } from './utils/data';
import { recepiesActions } from '../store';
import addIcon from '../../assets/icons/add.png';
import moreIcon from '../../assets/icons/more.png';

let jakasData = returnData()
console.log("JakasData", jakasData)

//Komponent- propsy
const Main = ({ setData, storeData, navigation }) => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const [linkInput, setLinkInput] = useState('');
  const [selectedValue, setSelectedValue] = useState('Dinners');

  useEffect(() => {
    const getData = () => {
      setData(jakasData);
      setIsLoading(false);
    };
    getData();
  }, [setData, storeData]);

  const setRecepieToDB = async () => {
    console.log("Set recepie", jakasData)
    if (jakasData !== undefined) {
      let itemToSet = {
        id: jakasData.length,
        category: selectedValue,
        name: nameInput,
        image: urlInput,
        link: linkInput,
      }
      // const dataFromDB = await setToDatabase(itemToSet);
      setToDatabase(itemToSet)
    }
    else {
      return console.log("Co jest grane")
    }
  }


  return (
    <View
      style={{
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
      }}>
      {isModalVisible && (
        <Modal
          animationType="slide"
          transparent={true}
          onRequestClose={() => setIsModalVisible(false)}
          onBackdropPress={() => setIsModalVisible(false)}
          onBackButtonPress={() => setIsModalVisible(false)}>
          <View style={styles.centeredView}>
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
          data={storeData}
          category="Recipies"
          backgroundColor="#D9E1AC"
          textColor="#842B45"
        />
      </SafeAreaView>
    </View>
  );
};

const mapState = state => ({
  storeData: state.recepies,
});

const mapDispatch = dispatch => ({
  setData: jakasData => dispatch(recepiesActions.setData(jakasData)),
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
  buttonOpen: {
    backgroundColor: '#F194FF',
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
  modalText: {
    marginBottom: 15,
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
