import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Main from "./src/components/Main";
const Drawer =createDrawerNavigator();

const Week1= ()=>{
    return(
        <View>
            <text style={styles.text}>Tydzien 1</text>
        </View>
    )

}
const Week2= ()=>{
    return(
        <View>
            <text style={styles.text}>Tydzien 2</text>
        </View>
    )

}
const Week3= ()=>{
    return(
        <View>
            <text style={styles.text}>Tydzien 3</text>
        </View>
    )

}
const Week4= ()=>{
    return(
        <View>
            <text style={styles.text}>Tydzien 4</text>
        </View>
    )

}
const styles=StyleSheet.create({
    text:{
        color: '#842B45',
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 1,
    }

    }
)

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRoutName="Main">

        
      </Drawer.Navigator>
    <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
      <StatusBar />
      <Main/>
    </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 2,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
