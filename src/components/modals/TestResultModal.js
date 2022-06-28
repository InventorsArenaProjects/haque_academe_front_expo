import { View, Text, Modal, Dimensions, StyleSheet } from 'react-native'
import React from 'react'

import Btn from '../commons/buttons/Btn'
import color from '../../globalStyles/color'
import { DASHBOARD } from '../../constants/routeNames'
import { useNavigation } from '@react-navigation/native';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const TestResultModal = ({ showResult, mcqResult, showResultHandler }) => {
    const navigation = useNavigation();
    return (
        <Modal
            visible={showResult}
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
                    <View style={{ width: "87%", alignItems: "center", justifyContent: "center", marginTop: "5%" }}>
                        <Text style={{ textAlign: "center", width: "79%", fontSize: 18, color: "grey", fontWeight: "bold" }}>Your Mock Test Result</Text>
                    </View>
                    <View style={{ width: "100%", alignItems: "center", justifyContent: "center", height: H / 5, marginBottom: "5%" }}>
                        {/* <Text style={{ color: "red" }}>{noSheetErr}</Text> */}
                        <View style={{
                            borderRadius: 8,
                            borderColor: "grey",
                            borderWidth: 1,
                            width: "80%",
                            paddingVertical: "2%",
                            justifyContent: "center",
                            paddingHorizontal: "2%"
                        }}>
                            {
                                mcqResult !== false ?
                                    <>
                                        <View style={styles.row}>
                                            <Text style={styles.label}>Total Attemts: </Text>
                                            <Text style={styles.value}>{mcqResult.attemt_count}</Text>
                                        </View>
                                        <View style={styles.row}>
                                            <Text style={styles.label}>Total Score: </Text>
                                            <Text style={styles.value}>{mcqResult.score}</Text>
                                        </View>
                                    </> : <><Text>No data</Text></>
                            }

                        </View>
                    </View>
                    <View style={{ width: "100%", alignItems: "center", justifyContent: "space-between", height: H / 7, marginBottom: "6%" }}>
                        <Btn
                            title={<Text style={{ fontSize: 14, fontWeight: "bold", color: color.whiteColor }}>Ok</Text>}
                            color={color.colorPrimary}
                            style={{ width: "80%" }}
                            submitListener={() => navigation.replace(DASHBOARD)}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default TestResultModal

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