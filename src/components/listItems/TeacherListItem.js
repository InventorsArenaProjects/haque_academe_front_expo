import { Dimensions, TouchableOpacity, View, Text, Image, StyleSheet, Linking, Alert, Platform } from 'react-native'
import React from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';
import color from '../../globalStyles/color'
import { DASHBOARD } from '../../constants/routeNames'
import WaitModal from '../modals/WaitModal'

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

const TeacherListItem = ({ data }) => {
    const navigation = useNavigation();
    const setTeacher = async () => {
        await AsyncStorage.setItem("teacher_id", data.item.teacher_id);
        navigation.replace(DASHBOARD);
    }

    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={setTeacher}>
            <View style={styles.teacherImgBox}>
                <Image source={require("../../assets/images/teacher.png")} style={styles.teacherImg} />
            </View>
            <View style={styles.teacherInfo}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: color.colorSecondary }}>{data.item.data[0].first_name} {data.item.data[0].last_name}</Text>
            </View>
        </TouchableOpacity>
    )
}


export default TeacherListItem

const styles = StyleSheet.create({
    container: {
        height: H / 6,
        width: '100%',
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    teacherImg: {
        resizeMode: "contain",
        height: 70,
        width: 70,
        marginLeft: 10
    },
    teacherInfo: {
        flex: 1,
        height: "100%",
        paddingHorizontal: "5%",
        paddingVertical: "7%",
        flexDirection: "row",
        // backgroundColor: "blue"
    },
    teacherImgBox: {
        // backgroundColor: "red"
    }
})
