// ------------ System Components ------------ 
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, View, useWindowDimensions, StyleSheet, Dimensions, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// ------------ Third Party Components ------------
import Dashboard from '../screens/Dashboard';
import Routine from '../screens/Routine';
import ChangePassword from '../screens/ChangePassword';
import BottomTab from '../navigation/BottomTab';
import color from '../globalStyles/color';
import CustomDrawer from '../components/CustomDrawer'

// ------------ Constants ------------ 
const Drawer = createDrawerNavigator();

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;


const DrawerTab = () => {
  return (
    <Drawer.Navigator initialRouteName="Dashboard" drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Dashboard"
        component={BottomTab}
        options={{
          drawerIcon: config =>  <MaterialIcons name="apps" color={"grey"} size={24} />,
          headerTintColor: 'white',
          drawerActiveBackgroundColor: 'white',
          drawerActiveTintColor: 'grey',
          drawerInactiveTintColor: 'black',
          headerShown: false,
          drawerPosition: "left",
          headerStyle: { backgroundColor: '#9E1510' },
          // headerBackground: () => (
          //   <View style={{ backgroundColor: '#9E1510', height: 78 }}>
          //     <Image source={{ uri: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }} style={{ height: 37, width: 37, borderRadius: 37, marginTop: '8%' }}></Image>
          //   </View>
          // ),
        }}
      />
      <Drawer.Screen
        name="Class Routine"
        component={Routine}
        options={{
          drawerIcon: config =>  <MaterialIcons name="collections" color={"grey"} size={24} />,
          headerShown: false,
          headerTintColor: 'white',
          drawerActiveBackgroundColor: 'white',
          drawerActiveTintColor: 'grey',
          drawerInactiveTintColor: 'black',
          headerStyle: { backgroundColor: '#9E1510' },
          // headerBackground: () => (
          //   <View style={{ backgroundColor: '#9E1510', height: 85 }}>
          //     <Image source={{ uri: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }} style={{ height: 37, width: 37, borderRadius: 37, marginLeft: '85%', marginTop: '8%' }}></Image>
          //   </View>
          // ),
        }}
      />
      <Drawer.Screen
        name="Change Password"
        component={ChangePassword}
        options={{
          drawerIcon: config =>  <MaterialIcons name="build" color={"grey"} size={24} />,
          headerTintColor: 'white',
          drawerActiveBackgroundColor: 'white',
          drawerActiveTintColor: 'grey',
          drawerInactiveTintColor: 'black',
          headerShown: false,
          drawerPosition: "left",
          headerStyle: { backgroundColor: '#9E1510' },
          // headerBackground: () => (
          //   <View style={{ backgroundColor: '#9E1510', height: 78 }}>
          //     <Image source={{ uri: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }} style={{ height: 37, width: 37, borderRadius: 37, marginTop: '8%' }}></Image>
          //   </View>
          // ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerTab;

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1
  },
  drawerHeader: {
    backgroundColor: color.colorPrimary
  },
  drawerFooter: {
    backgroundColor: color.colorPrimary
  },
  drawerContentStyle: {
    backgroundColor: color.colorPrimary
  },
  drawerHeaderImgBox: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  drawerHeaderImg: {
    width: 50,
    resizeMode: "contain",
    borderRadius: 100
  }
});