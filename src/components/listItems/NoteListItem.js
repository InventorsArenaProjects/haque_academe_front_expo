// ------------ System Component ------------
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    PermissionsAndroid,
    Image,
} from 'react-native';
import React, { useState, useEffect } from 'react';
// ------------ Third Party Component ------------
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
//   import RNFetchBlob from 'rn-fetch-blob';
// ------------ Constants ------------
import color from '../../globalStyles/color';
import Btn from '../commons/buttons/Btn';
import { downloadnotes } from '../../helpers/Request';
import { NOTE_PDF } from '../../constants/routeNames';
// import { useNavigation } from '@react-navigation/native';

// import PDF from '../../screens/PDF';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;
URL = 'https://inventorsarena.com/projects/haque_academy/api/notes/t/39/s/16';

const NoteListItem = ({ navigation, data }) => {
    const fileUrl = data.item.study_material;

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: 'white' }}>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <View style={styles.box}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={require('../../assets/images/pdf.png')}></Image>
                        </View>
                        <View style={styles.contentContainer}>
                            <Text style={styles.titleText}>{data.item.title}</Text>
                            <Text style={styles.subtitleText}>{data.item.description}</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <TouchableOpacity>
                                <Ionicons
                                    name="download-outline"
                                    size={35}
                                    color={'#9E1510'}
                                    style={{ marginTop: '6%' }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default NoteListItem;

const styles = StyleSheet.create({
    searchbar_container: {
        // marginTop: '4.5%',
        backgroundColor: '#9E1510',
        flexDirection: 'row',
        // marginLeft: '%',
        width: '70%',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#9E1510',
        height: 35,
        justifyContent: 'center',
        marginTop: '5%',
    },
    box: {
        height: 120,
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#A11A0E',
        marginTop: '5%',
        padding: 4,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    imageContainer: {
        //   backgroundColor: "red",
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        // backgroundColor: "green",
        width: '40%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    iconContainer: {
        // backgroundColor: "pink",
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 25,
        color: '#A11A0E',
    },
    subtitleText: {},
    //   image: {
    //     height: '49%',
    //     width: '14%',
    //     marginTop: '9%',
    //   },
    //   imagepremium: {
    //     height: '49%',
    //     width: '14%',
    //     marginTop: '9%',
    //     marginRight: '1%',
    //   },
    //   firsttext: {
    //     marginRight: '13%',
    //     marginTop: '15%',
    //     fontSize: 23,
    //     color: '#9E1510',
    //   },
    //   firsttextpremium: {
    //     marginRight: '13%',
    //     marginTop: '15%',
    //     fontSize: 23,
    //     color: '#9E1510',
    //   },
    //   secondtext: {
    //     marginLeft: '2%',
    //     marginTop: '7%',
    //     fontSize: 15,
    //     color: 'gray',
    //   },
    //   secondtextpremium: {
    //     marginLeft: '1%',
    //     marginTop: '7%',
    //     fontSize: 15,
    //     color: 'gray',
    //   },
    //   boxView: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-around',
    //     height: 110,
    //   },
});
