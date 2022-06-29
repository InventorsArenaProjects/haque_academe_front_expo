// ----------- System Components ----------- 
import React from 'react';
// ----------- Third Party Components -----------  
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// ----------- Custom Components ----------- 
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splashscreen">
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
