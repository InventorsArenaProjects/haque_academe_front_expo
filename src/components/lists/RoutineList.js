import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
// ----------------- CUSTOM COMPONENT -----------------  
import RoutineListItem from '../listItems/RoutineListItem'

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const RoutineList = ({ schedule, noSchedule }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                {!noSchedule ?
                    schedule && schedule.lenght !== 0 ?
                        schedule.map((item, index) => <RoutineListItem key={index} item={item} />)
                        :
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator size="large" color="blue" />
                            <Text style={{ fontWeight: 'bold', marginTop: 8 }}>Please wait...</Text>
                        </View>
                    :
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../../assets/no-data.png')}
                            style={{ height: 50, width: 50 }}
                        />
                        <Text style={{ fontWeight: 'bold', marginTop: 8 }}>
                            No Result Found
                        </Text>
                    </View>
                }
            </ScrollView>
        </View>
    )
}

export default RoutineList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "blue",
        paddingHorizontal: W / 30,
        paddingVertical: H / 50
    }
})