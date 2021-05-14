import React from 'react';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Main from './src/components/Main';
import CustomDrawer from './src/components/CustomDrawer';
import Week1 from './src/components/screens/Week1';
import Week2 from './src/components/screens/Week2';
import Week3 from './src/components/screens/Week3';
import Week4 from './src/components/screens/Week4';

import {useWindowDimensions} from 'react-native';
const Drawer = createDrawerNavigator();

const App = () => {
  const dimensions = useWindowDimensions();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={CustomDrawer}
        initialRouteName="Home"
        drawerStyle={{color: 'white'}}
      >
        <Drawer.Screen name="Home" component={Main} />
        <Drawer.Screen name="Week 1" component={Week1} />
        <Drawer.Screen name="Week 2" component={Week2} />
        <Drawer.Screen name="Week 3" component={Week3} />
        <Drawer.Screen name="Week 4" component={Week4} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
