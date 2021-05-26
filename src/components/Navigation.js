import React, { createRef } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../components/Main';
import CustomDrawer from '../components/CustomDrawer';
import Dinners from '../components/screens/Dinners';
import Soups from '../components/screens/Soups';
import Salads from '../components/screens/Salads';
import Desserts from '../components/screens/Desserts';

const Drawer = createDrawerNavigator();

const Navigation = () => {
    return (
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
    )
}

export default Navigation;