import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, Text, StatusBar, ScrollView, TouchableOpacity, TextInput, Image, SafeAreaView } from 'react-native';
// import Swiper from 'react-native-swiper';
// import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Header'
// ---------------------- CUSTOM COMPONENTS ----------------------
import RoutineList from '../components/lists/RoutineList';
import { getRoutine } from '../helpers/Request'

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

const Routine = ({ navigation }) => {
    const [routine, setRoutine] = useState([]);
    const [noRoutine, setNoRoutine] = useState(false);
    const getRoutineHandler = async () => {
        let res = await getRoutine(2, 1, 1);
        if (res) {
            setRoutine(res.data.data.routine);
            setNoRoutine(false);   
        } else {
            setNoRoutine(false);
        }
    }

    useEffect(() => {
        getRoutineHandler();
    }, []);

    return (
        <>
            <Header
                pageName="Routine"
                iconName="arrow-back"
                navLink={() => navigation.goBack()}
            />
            {/* end of heading code */}
            <RoutineList schedule={routine} noSchedule={noRoutine}/>
        </>
    )
}

// const styles = StyleSheet.create({
// })
export default Routine;