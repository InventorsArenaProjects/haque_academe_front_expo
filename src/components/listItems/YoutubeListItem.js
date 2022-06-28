import { Dimensions, TouchableOpacity, View, Text, Image, StyleSheet, Linking, Alert, Platform } from 'react-native'
import React from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';
import color from '../../globalStyles/color'
import WaitModal from '../modals/WaitModal'

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

const YoutubeListItem = ({ data }) => {
    console.log(data);
    const navigation = useNavigation();

    const openVideoHandler = url => {
        Linking.canOpenURL(url)
            .then(supported => {
                if (!supported) {
                    Alert.alert('URL is not available');
                } else {
                    return Linking.openURL(url);
                }
            })
            .catch(err => console.log(err));
    };


    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={() => openVideoHandler(data.item.video)}>

            <View style={styles.imgContainer}>
                <Image
                    style={styles.cardImg}
                    source={{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/taraknathapp.appspot.com/o/utube.png?alt=media&token=7a33361e-3741-4d80-b1bf-b47f3e8730bf',
                    }}
                />
            </View>
            <View style={styles.videoInfo}>
                <Text style={{fontSize: 18, color: color.colorSecondary, fontWeight: "bold"}}>
                    {data.item.title}
                </Text>
                <Text style={{fontSize: 14, color: "grey"}}>
                    {data.item.published_at}
                </Text>
            </View>

        </TouchableOpacity>
    )
}


export default YoutubeListItem

const styles = StyleSheet.create({
    container: {
        height: H / 6,
        backgroundColor: "white",
        borderRadius: 8,
        marginTop: "2%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    cardImg: {
        resizeMode: "contain",
        height: 110,
        width: 110,
    },
    videoInfo: {
        flex: 1,
        height: "100%",
        paddingHorizontal: "5%",
        paddingVertical: "6%"
    }
});