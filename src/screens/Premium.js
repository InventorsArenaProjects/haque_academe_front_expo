// ------------ System Components ------------ 
import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text, StatusBar, ScrollView, TouchableHighlight, TouchableOpacity, TextInput, Image, SafeAreaView } from 'react-native';
// ------------ Third Party Components ------------ 
import Ionicons from 'react-native-vector-icons/Ionicons';
// import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
// ------------ Custom Components ------------ 
import Header from '../components/Header';
// import Payment from '../components/Payment';
import Btn from "../components/commons/buttons/Btn";
import color from "../globalStyles/color";

// ------------ Constants ------------ 
let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;


const Premium = ({ navigation, route }) => {
    console.log(route.params)
    return (
        <ScrollView keyboardShouldPersistTaps={true}>
            <Header
                pageName="Buy This Course"
                iconName="arrow-back"
                navLink={() => navigation.goBack()}
            />

            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <FontAwesome5 name="crown" size={60} color={'#DAA520'} style={{}} onPress={() => navigation.navigate('Premium')} />
                    <Text style={{ marginTop: "5%", fontSize: 18, fontWeight: "bold", color: "white" }}>{route.params.title}</Text>
                    <Text style={{ marginTop: "5%", fontSize: 18, fontWeight: "bold", color: "white" }}><FontAwesome name="rupee" color={"white"} size={18} /> {Number(route.params.price) - Number(route.params.price) * (Number(route.params.discount) / 100)} </Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.bodyContainer}>
                        <View style={styles.priceBox}>
                            <Text style={styles.label}>Title: </Text>
                            <Text style={styles.value}>{route.params.title}</Text>
                        </View>
                        <View style={styles.priceBox}>
                            <Text style={styles.label}>Main Price: </Text>
                            <Text style={styles.value}>{Math.trunc(Number(route.params.price))}</Text>
                        </View>
                        <View style={styles.priceBox}>
                            <Text style={styles.label}>Discount: </Text>
                            <Text style={styles.value}>{route.params.discount}%</Text>
                        </View>
                        <View style={styles.priceBox}>
                            <Text style={styles.label}>Price: </Text>
                            <Text style={styles.value}>{Number(route.params.price) - Number(route.params.price) * (Number(route.params.discount) / 100)}</Text>
                        </View>
                    </View>
                    <View style={styles.bodyBtn}>
                        {/* <Payment totalPrice={100 * (Number(route.params.price) - Number(route.params.price) * (Number(route.params.discount) / 100))} /> */}
                    </View>
                </View>
            </View>
        </ScrollView>

    );

};

const styles = StyleSheet.create({

    header: {
        width: "100%",
        height: H / 3,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color.colorPrimary
    },
    body: {
        width: "100%",
        flex: 1,
        // backgroundColor:"red"
    },
    bodyBtn: {
        width: "100%",
        marginTop: "10%",
        alignItems: "center",
    },
    bodyContainer: {
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "grey",
        paddingHorizontal: "6%",
        paddingVertical: "7%",
        marginHorizontal: "8%",
        marginTop: "15%"
    },
    priceBox:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "3%"
    },
    label: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#192063",
    }

});
export default Premium;