// ------------ System Component ------------ 
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, PermissionsAndroid, Image } from 'react-native'
import React, { useState } from 'react'
// ------------ Third Party Component ------------ 
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import RNFetchBlob from 'rn-fetch-blob';
// ------------ Constants ------------
import color from '../../globalStyles/color'
import Btn from '../commons/buttons/Btn'
import { downloadnotes } from '../../helpers/Request';
import { NOTE_PDF } from '../../constants/routeNames'
//
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const NoteListItem = ({ data }) => {
    const navigation = useNavigation();

    // const downloadHistory = async () => {
    //     const { config, fs } = RNFetchBlob;
    //     let PictureDir = fs.dirs.PictureDir;
    //     let date = new Date();
    //     let options = {
    //         fileCache: true,
    //         addAndroidDownloads: {
    //             //Related to the Android only
    //             useDownloadManager: true,
    //             notification: true,
    //             path:
    //                 PictureDir +
    //                 '/Report_Download' +
    //                 Math.floor(date.getTime() + date.getSeconds() / 2),
    //             description: 'Risk Report Download',
    //         },
    //     };
    //     config(options)
    //     // .fetch('GET', URL)
    //     // .then(res => {
    //     //   //Showing alert after successful downloading
    //     //   // console.log('res -> ', JSON.stringify(res.study_material));
    //     //   // console.log(res.data)
    //     //   alert('Report Downloaded Successfully.');
    //     // });
    //     const response = await downloadnotes();
    //     console.log(response.data.data);
    //     console.log('res -> ', JSON.stringify(response.data.data.study_material));
    // };
    // //End
    // //--Permission Checking Start
    // const historyDownload = async () => {
    //     console.log("hsjh")
    //     //Function to check the platform
    //     //If iOS the start downloading
    //     //If Android then ask for runtime permission
    //     if (Platform.OS === 'ios') {
    //         downloadHistory();
    //     } else {
    //         try {
    //             PermissionsAndroid.request(
    //                 PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    //                 {
    //                     title: 'Storage Permission',
    //                     message: 'Haque Academe want to access your storage for storing notes',
    //                 },
    //             ).then(granted => {
    //                 if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //                     //Once user grant the permission start downloading
    //                     console.log('Storage Permission Granted.');
    //                     downloadHistory();
    //                 } else {
    //                     //If permission denied then show alert 'Storage Permission Not Granted'
    //                     Alert.alert('storage_permission');
    //                 }
    //             });
    //         } catch (err) {
    //             //To handle permission related issue
    //             console.log('error', err);
    //         }
    //     }
    // };

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: 'white' }}>
                <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}>
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
                            <TouchableOpacity onPress={() => {navigation.navigate(NOTE_PDF)}}>
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
    )
}


export default NoteListItem

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
