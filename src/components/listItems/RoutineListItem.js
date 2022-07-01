import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

// --------------------- CUSTOM COMPONENT --------------------- 
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const RoutineListItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.dayText}>{item.day}</Text>
            <Text style={{marginHorizontal: 5}}>-</Text>
            <View style={styles.timeContainer}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#63a4ff'}}>{item.time}</Text>
                <Text style={{marginHorizontal: 5}}>{item.meridian}</Text>
            </View>
        </View>
    )
}

export default RoutineListItem

const styles = StyleSheet.create({
    dayText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#737373'
    },
    container: {
        height: H / 10,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: "5%",
        marginTop: "2%",
        borderRadius: 6,
        // borderBottomColor: '#c7c7c7',
        // borderBottomWidth: 1
    },
    timeContainer: {
        flexDirection: 'row'
    }
})