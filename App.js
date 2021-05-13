import React from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Main from './src/components/Main';
const Drawer = createDrawerNavigator();

const Week1 = () => {
  return (
    <View>
      <Text style={styles.text}>Tydzien 1</Text>
    </View>
  );
};
const Week2 = () => {
  return (
    <View>
      <Text style={styles.text}>Tydzien 2</Text>
    </View>
  );
};
const Week3 = () => {
  return (
    <View>
      <Text style={styles.text}>Tydzien 3</Text>
    </View>
  );
};
const Week4 = () => {
  return (
    <View>
      <Text style={styles.text}>Tydzien 4</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
       // openByDefault={true}
        drawerPosition="left"
        drawerType="front">
        <Drawer.Screen name="Home" component={Main} />
        <Drawer.Screen name="Week1" component={Week1} />
        <Drawer.Screen name="Week2" component={Week2} />
        <Drawer.Screen name="Week3" component={Week3} />
        <Drawer.Screen name="Week4" component={Week4} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#842B45',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
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
