import React, { createRef } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../components/Main';
import CustomDrawer from '../components/CustomDrawer';
import Dinners from '../components/screens/Dinners';
import Soups from '../components/screens/Soups';
import Salads from '../components/screens/Salads';
import Desserts from '../components/screens/Desserts';

export const navigationRef = createRef()
const Drawer = createDrawerNavigator();

export const navigate = (name, params) => {
    navigationRef.current?.navigate(name, params);
    console.log(name, params)
}


const Navigation = () => {
    return (
        <NavigationContainer
            ref={navigationRef}>
            <Drawer.Navigator
                contentComponent={CustomDrawer}
                initialRouteName="Home"
                drawerStyle={{ color: 'white' }}
            >
                <Drawer.Screen name="Home" component={Main} />
                <Drawer.Screen name="Dinners" component={Dinners} />
                <Drawer.Screen name="Soups" component={Soups} />
                <Drawer.Screen name="Salads" component={Salads} />
                <Drawer.Screen name="Desserts" component={Desserts} />
            </Drawer.Navigator>
            <SafeAreaView>
                <StatusBar />
                <Main/>
            </SafeAreaView>
        </NavigationContainer>
    )
}

export default Navigation;