import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { store } from './src/store';

import Main from './src/components/Main';
import CustomDrawer from './src/components/CustomDrawer';
import Dinners from './src/components/screens/Dinners';
import Soups from './src/components/screens/Soups';
import Salads from './src/components/screens/Salads';
import Desserts from './src/components/screens/Desserts';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={CustomDrawer}
          initialRouteName="Home"
          drawerStyle={{ color: 'white' }}
        >
          <Drawer.Screen name="Home" component={Main} />
          <Drawer.Screen name="Dinners" component={Dinners} />
          <Drawer.Screen name="Soups" component={Soups} />
          <Drawer.Screen name="Salads" component={Salads} />
          <Drawer.Screen name="Desserts" component={Desserts} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
