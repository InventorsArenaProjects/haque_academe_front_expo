import { View, Text, Modal, Dimensions, StyleSheet } from 'react-native'
import React from 'react'

import Btn from '../commons/buttons/Btn'
import color from '../../globalStyles/color'
import { DASHBOARD } from '../../constants/routeNames'
import { useNavigation } from '@react-navigation/native';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const WaitModal = ({ waitStatus }) => {
    console.log("sdf45")
    const navigation = useNavigation();
    return (
        <Modal
            visible={waitStatus}
            animationType="fade"
            transparent={true}
        >
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.7)",
            }}>
                <View style={{
                    height: H / 1.8,
                    width: W / 1.1,
                    borderRadius: 5,
                    backgroundColor: "white",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                   
                </View>
            </View>
        </Modal>
    )
}

export default WaitModal

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    label: {
        color: "#737373",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: "2%"
    },
    value: {
        fontSize: 16,
        color: "#3859b5"
    }
})