import { View, Text, Modal, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import Entypo from 'react-native-vector-icons/Entypo';

const TestMenuModal = ({ showMenu, showMenuHandler, questions,changeQuestionHandler }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={showMenu}
            onRequestClose={() => {
                showMenuHandler(!showMenu);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View
                        style={{
                            backgroundColor: '#A11A0E',
                            width: '100%',
                            flex: 2,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            paddingHorizontal: '3%',
                        }}>
                        <Image
                            source={{
                                uri: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                            }}
                            style={{
                                height: 40,
                                width: 40,
                                borderRadius: 20,
                                marginTop: '8%',
                                marginLeft: '5%',
                            }}></Image>
                        <Text
                            style={{
                                fontSize: 19,
                                color: '#fff',
                                marginTop: '9%',
                                marginLeft: '6%',
                            }}>
                            Debadrita Ghosh
                        </Text>
                        <Entypo
                            name="cross"
                            size={35}
                            color={'white'}
                            onPress={() => showMenuHandler(!showMenu)}
                            style={{ marginTop: '9%', marginLeft: '10%' }}
                        />
                    </View>
                    <View
                        style={{
                            // backgroundColor: 'yellow',
                            width: '100%',
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            paddingHorizontal: '3%',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <View
                                style={{
                                    height: 20,
                                    width: 20,
                                    backgroundColor: 'green',
                                    borderRadius: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}></View>
                            <Text style={{ color: 'black', marginHorizontal: '3%' }}>
                                Un-Attempted
                            </Text>
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <View
                                style={{
                                    height: 20,
                                    width: 20,
                                    backgroundColor: 'blue',
                                    borderRadius: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}></View>
                            <Text style={{ color: 'black', marginHorizontal: '3%' }}>
                                Attempted
                            </Text>
                        </View>
                    </View>

                    {/* -------------- */}
                    <View
                        style={{
                            // backgroundColor: 'pink',
                            width: '100%',
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            paddingHorizontal: '3%',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <View
                                style={{
                                    height: 20,
                                    width: 20,
                                    backgroundColor: 'yellow',
                                    borderRadius: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}></View>
                            <Text style={{ color: 'black', marginHorizontal: '3%' }}>
                                Mark As Read
                            </Text>
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <View
                                style={{
                                    height: 20,
                                    width: 20,
                                    backgroundColor: 'red',
                                    borderRadius: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}></View>
                            <Text style={{ color: 'black', marginHorizontal: '3%' }}>
                                Un-Seen
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            backgroundColor: '#A11A0E',
                            width: '100%',
                            flex: 5,
                        }}>
                        <View
                            style={{
                                height: '20%',
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                // marginTop: '5%',
                            }}>
                            <Text
                                style={{
                                    color: '#9E1510',
                                    textAlign: 'center',
                                    fontSize: 16,
                                    color: 'white',
                                }}>
                                Mock Test - Data Structure & Algorithms
                            </Text>
                        </View>
                        <View
                            style={{
                                height: '50%',
                                width: '100%',
                                backgroundColor: 'white',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                padding: '3%',
                                borderBottomWidth: 2,
                                borderColor: '#A11A0E',
                            }}>
                            {/* -------------------- */}
                            {/* <Text>{ questions.length > 0 ? questions.length : 0} </Text>  */}
                            {questions.length > 0 ? (
                                questions.map((ques, i) => (
                                    <TouchableOpacity
                                        key={i}
                                        style={{
                                            // backgroundColor: 'green',
                                            height: 35,
                                            width: 35,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                        onPress={() => changeQuestionHandler(i)}>
                                        {/* Null = unseen, 1 = attempted, 2 = markasread 3 = un-attempted  */}
                                        <View
                                            style={{
                                                height: 25,
                                                width: 25,
                                                backgroundColor:
                                                    ques.attStatus === null
                                                        ? 'red'
                                                        : ques.attStatus === 2
                                                            ? 'yellow'
                                                            : ques.attStatus === 3
                                                                ? 'green'
                                                                : ques.attStatus === 1
                                                                    ? 'blue'
                                                                    : 'red',
                                                borderRadius: 20,
                                                marginHorizontal: 10,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                            <Text
                                                style={{
                                                    color: 'white',
                                                    fontSize: 15,
                                                    textAlign: 'center',
                                                }}>
                                                {i + 1}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                ))
                            ) : (
                                <Text>NO QUESTION</Text>
                            )}
                        </View>

                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '30%',
                                width: '100%',
                                backgroundColor: 'white',
                            }}>
                            {/* <TouchableOpacity
                                style={{
                                    backgroundColor: '#9E1510',
                                    width: '40%',
                                    height: '40%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 7,
                                }}>
                                <Text style={{ color: 'white' }}> Submit Test</Text>
                            </TouchableOpacity> */}
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default TestMenuModal

const styles = StyleSheet.create({
    //-----------------------
    //Outer POrtion Of Modal
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        // marginTop: 22,
        // backgroundColor: "red"
    },
    //Inner portion of Modal
    modalView: {
        height: '90%',
        width: '80%',
        // margin: 20,
        backgroundColor: 'white',
        // borderRadius: 10,
        // padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});
