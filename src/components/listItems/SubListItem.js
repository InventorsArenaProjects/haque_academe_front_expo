import { Dimensions, TouchableOpacity, View, Text, Image, StyleSheet, Linking, Alert, Platform } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
// Routes 
import { SAQ_TEST_LIST } from '../../constants/routeNames';
import { CHAPTER } from '../../constants/routeNames'

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

const SubListItem = ({ data, type }) => {
    console.log(data.item);
    const navigation = useNavigation();

    const navFunc1 = () => {
        navigation.navigate(CHAPTER, { id: data.item.id });
    };
    const navFunc2 = (courseId) => {
        navigation.navigate('MockTestStart', {
            courseId: courseId,
        })
    }

    return (
        <TouchableOpacity style={styles.item} activeOpacity={0.8} onPress={() => { type === "notes" ? navFunc1() : type === "mcqTest" ?navFunc2(data.item.course_id): navigation.navigate(SAQ_TEST_LIST, { subjectId: data.item.id }) }}>
            <View
                style={{
                    width: '40%',
                    height: '100%',
                    justifyContent: "center",
                }}>
                <Image style={styles.img} source={require("../../assets/images/mockbook.png")}></Image>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{data.item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}


export default SubListItem

const styles = StyleSheet.create({
    item: {
        height: H / 6,
        width: '100%',
        borderRadius: 20,
        backgroundColor: '#FFF',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#A11A0E',
        borderWidth: 1,
        elevation: 10,
        overflow: 'hidden',
        flexDirection: 'row',
    },
    imageContainer: {
        width: '40%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        height: '80%',
        width: '80%',
    },
    textContainer: {
        width: '60%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    text: { color: '#9E1510', fontSize: 25 },
})
