// ------------ System Component ------------ 
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ActivityIndicator, Image } from 'react-native'
import React, { useState } from 'react'
// ------------ Third Party Component ------------ 
import { useNavigation } from '@react-navigation/native';
import color from '../../globalStyles/color'
import Btn from '../commons/buttons/Btn'
// ------------ Constants ------------
import { SAQ_QUESTIONS } from "../../constants/routeNames";
//
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;


const DesTestListItem = ({ data }) => {
    const navigation = useNavigation();
    let timeArr = data.item.time.split(":");
    
    return (
        <View style={styles.container}>
            <View style={styles.saqTestNameBox}>
                <Image source={require('../../assets/images/jee.png')} style={{ resizeMode: "contain", height: 70 }}></Image>
                <View style={styles.saqTestName}>
                    <View style={styles.testInfoContainer}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 16,
                            color: "#9d9d9e"
                        }}>Title: </Text>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 16,
                        }}>{data.item.title}</Text>
                    </View>
                    <View style={styles.testInfoContainer}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 16,
                            color: "#9d9d9e"
                        }}>Marks: </Text>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 16,
                        }}>{data.item.marks}</Text>
                    </View>
                    <View style={styles.testInfoContainer}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 16,
                            color: "#9d9d9e"
                        }}>Questions: </Text>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 16,
                        }}>{data.item.no_of_qus}</Text>
                    </View>
                    <View style={styles.testInfoContainer}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 16,
                            color: "#9d9d9e"
                        }}>Time: </Text>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 16,
                        }}>{data.item.time}</Text>
                    </View>
                </View>
            </View>
            <Btn
                title={<Text style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    color: color.whiteColor
                }}>Start</Text>}
                color={color.colorSecondary}
                style={styles.startBtn}
                submitListener={() => navigation.navigate(SAQ_QUESTIONS, {
                    quesId: data.item.id,
                    quesTime: Number(timeArr[0]) * 60 * 60 + Number(timeArr[1]) * 60 + Number(timeArr[2]),
                })}
            />
        </View>
    )
}


export default DesTestListItem

const styles = StyleSheet.create({
    container: {
        height: H / 4,
        borderRadius: 10,
        borderColor: color.colorSecondary,
        borderWidth: 2,
        marginBottom: 10,
        justifyContent: "space-between"
    },
    saqTestNameBox: {
        flex: 1,
        width: "100%",
        // paddingHorizontal: "2%",
        flexDirection: "row",
        // justifyContent: "space-between",
        alignItems: "center"
    },
    saqTestName: {
        width: "100%",
    },
    startBtn: {
        marginHorizontal: "5%",
        marginBottom: "3%"
    },
    testInfoContainer: {
        flexDirection: "row"
    }
})
