import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../screens/HomeScreen';
import Dashboard from '../screens/Dashboard';
import Routine from '../screens/Routine';
import Youtube from '../screens/Youtube';
const Tab = createBottomTabNavigator();

const BottomTab = ({ navigation }) => {
    return (

        <Tab.Navigator
            initialRouteName="HomeScreen"
            activeColor="#000000"
            inactiveColor="#000000"
            barStyle={{ backgroundColor: '#00000' }}
        >
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarHideOnKeyboard: true,
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarActiveTintColor: '#9E1510',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" color={color} size={27} />
                    ),
                }}
            />
            <Tab.Screen
                name="Routine"
                component={Routine}
                options={{
                    // tabBarHideOnKeyboard: true,
                    headerShown: false,
                    tabBarLabel: 'Routine',
                    // tabBarColor: '#ffff00',
                    tabBarActiveTintColor: '#9E1510',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="md-calendar-outline" color={color} size={27} />
                    ),
                }}
            />
            <Tab.Screen
                name="Youtube"
                component={Youtube}
                options={{
                    // tabBarHideOnKeyboard: true,
                    headerShown: false,
                    tabBarLabel: 'Youtube',
                    // tabBarColor: '#ffff00',
                    tabBarActiveTintColor: '#9E1510',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="play" color={color} size={27} />
                    ),
                }}
            />


        </Tab.Navigator>
        





    );
}


export default BottomTab;