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
import React, {useState, useEffect} from 'react';
// ------------ Third Party Component ------------
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFetchBlob from 'rn-fetch-blob';
// ------------ Constants ------------
import color from '../../globalStyles/color';
import Btn from '../commons/buttons/Btn';
import {downloadnotes} from '../../helpers/Request';
import {NOTE_PDF} from '../../constants/routeNames';
//
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;
URL = 'https://inventorsarena.com/projects/haque_academy/api/notes/t/39/s/16';

const NoteListItem2 = ({data}) => {
  const fileUrl = data.item.study_material;

  const checkPermission = async () => {
    // Function to check the platform
    // If Platform is Android then check for permissions.

    if (Platform.OS === 'ios') {
      downloadFile();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message:
              'Application needs access to your storage to download File',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Start downloading
          downloadFile();
          console.log('Storage Permission Granted.');
        } else {
          // If permission denied then show alert
          Alert.alert('Error', 'Storage Permission Not Granted');
        }
      } catch (err) {
        // To handle permission related exception
        console.log('++++' + err);
      }
    }
  };

  const downloadFile = () => {
    // Get today's date to add the time suffix in filename
    let date = new Date();
    // File URL which we want to download
    let FILE_URL = fileUrl;
    // Function to get extention of the file url
    let file_ext = getFileExtention(FILE_URL);

    file_ext = '.' + file_ext[0];

    // config: To get response by passing the downloading related options
    // fs: Root directory path to download
    const {config, fs} = RNFetchBlob;
    let RootDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        path:
          RootDir +
          '/file_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          file_ext,
        description: 'downloading file...',
        notification: true,
        // useDownloadManager works with Android only
        useDownloadManager: true,
      },
    };
    config(options)
      .fetch('GET', FILE_URL)
      .then(res => {
        // Alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        alert('File Downloaded Successfully.');
      });
  };

  const getFileExtention = fileUrl => {
    // To get the file extension
    return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
  };

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'white'}}>
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
              <TouchableOpacity onPress={() => checkPermission()}>
                <Ionicons
                  name="download-outline"
                  size={35}
                  color={'#9E1510'}
                  style={{marginTop: '6%'}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NoteListItem2;

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
