import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
// import Dashboard from '../screens/Dashboard';
import MockTest from '../screens/MockTest';
import YourNotes from '../screens/YourNotes';
import DescriptiveTest from '../screens/DescriptiveTest';
import SaqTestList from '../screens/SaqTestList';
import MockTestStart from '../screens/MockTestStart';
import Question from '../screens/Question';
import Chapter from '../screens/Chapter';
import Routine from '../screens/Routine';
import Youtube from '../screens/Youtube';
import Premium from '../screens/Premium';
import MenuQuestion from '../screens/MenuQuestion';
import SaqQuestions from '../screens/SaqQuestions';
import Teachers from '../screens/Teachers';
import LiveClass from '../screens/LiveClass';
// import NotePdf from '../screens/PDF'

// import BottomTab from './BottomTab';
import DrawerTab from './DrawerTab';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Teachers">
            <Stack.Screen name="Teachers" component={Teachers} />
            {/* <Stack.Screen name="NotePdf" component={NotePdf} /> */}
            <Stack.Screen name="Dashboard" component={DrawerTab} />
            <Stack.Screen name="MockTest" component={MockTest} />
            <Stack.Screen name="YourNotes" component={YourNotes} />
            <Stack.Screen name="DescriptiveTest" component={DescriptiveTest} />
            <Stack.Screen name="SaqTestList" component={SaqTestList} />
            <Stack.Screen name="MockTestStart" component={MockTestStart} />
            <Stack.Screen name="Question" component={Question} />
            <Stack.Screen name="Chapter" component={Chapter} />
            <Stack.Screen name="Routine" component={Routine} />
            <Stack.Screen name="Youtube" component={Youtube} />
            <Stack.Screen name="Premium" component={Premium} />
            <Stack.Screen name="MenuQuestion" component={MenuQuestion} />
            <Stack.Screen name="saqQuestions" component={SaqQuestions} />
            <Stack.Screen name="LiveClass" component={LiveClass} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
