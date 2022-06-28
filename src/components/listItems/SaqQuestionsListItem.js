import { Dimensions, TouchableOpacity, View, Text, Image, StyleSheet, Linking, Alert, Platform } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import { SAQ_TEST_LIST } from '../../constants/routeNames';
import color from '../../globalStyles/color';

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

const SaqQuestionsListItem = ({ data }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.quesContainer}>
            <View style={styles.markers}>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.index}>{data.index + 1}</Text>
                <Text style={styles.text}>{data.item.qus_text}</Text>
            </View>
        </View>
    )
}


export default SaqQuestionsListItem

const styles = StyleSheet.create({
    quesContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "2%",
        borderRadius: 8,
    },
    markers: {
        width: "3%",
        paddingVertical: "8%",
        backgroundColor: color.colorSecondary,
        borderTopStartRadius: 5,
        borderBottomStartRadius: 5
    },
    textContainer: {
        width: "97%",
        alignItems: "center",
        paddingHorizontal: "3%",
        flexDirection: "row",
        borderLeftColor: "#242424",
        borderRightColor: "#242424",
        borderTopColor: "#e3e3e3",
        borderBottomColor: "#e3e3e3",
        borderWidth: 1,
        borderTopEndRadius: 5,
        borderBottomEndRadius: 5
    },
    text: { 
        color: '#9E1510', 
        fontSize: 14 
    },
    index: {
        color: '#9E1510',
        fontSize: 14,
        marginRight: "5%"
    }
})
