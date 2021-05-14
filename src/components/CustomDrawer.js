import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}
      style={{
        backgroundColor: '#842B45',
      }}>
      <DrawerItemList {...props}
        itemStyle={{
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          borderRadius: 0,
          fontSize: 14,
          paddingLeft: 14,
          margin: 20,
          height: 40,
          justifyContent: 'center',
        }}
        labelStyle={{
          color: '#42528e',
          fontSize: 14,
          fontWeight: 'normal',
          fontFamily: 'SFUIDisplay-Regular',
          marginTop: 0,
          marginLeft: -20,
          paddingVertical: -20,
          marginTop: -10,
          marginBottom: -20,
          }}
        />
        <DrawerItem label="Logout" onPress={() => props.navigation.toggleDrawer()} />
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;
