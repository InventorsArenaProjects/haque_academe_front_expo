// import system components 
import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState, useRef } from 'react'

import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './AuthNavigator'
import AppNavigator from './AppNavigator'

import { GlobalContext } from '../context/Provider';


const Navigator = () => {
    const { authDispatch, authState: { isLoggedIn } } = useContext(GlobalContext);
    // ------------------------- RENDER ------------------------- 
    return (
        <NavigationContainer>
            {/* check phone no and password   */}
            {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
            {/* <AuthNavigator /> */}
        </NavigationContainer>
    )
}

export default Navigator