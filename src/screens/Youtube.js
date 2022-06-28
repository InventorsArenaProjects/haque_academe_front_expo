// ------------- System Components ------------- 
import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
  Linking,
  Alert,
} from 'react-native';
// ------------- Third Party Components -------------
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// ------------- Custom Components -------------
import { videos } from '../helpers/Request';
import Header from '../components/Header';
import Screen from '../components/Screen';
import Card from '../components/Card';
import YoutubeList from '../components/lists/YoutubeList'
import Input from '../components/commons/inputs/Input'
import Btn from '../components/commons/buttons/Btn'
// ------------- Constants -------------
let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

const Youtube = ({ navigation }) => {
  // States 
  const [data, setData] = useState([]);
  const [noData, setNoData] = useState(false);
  // get youtube videos handler 
  const ytVideoHandler = async () => {
    try {
      const res = await videos();
      if (res.status && res.data.data !== null) {
        setData(res.data.data);
        setNoData(false);
      } else {
        setData([]);
        setNoData(true);
      }
    } catch (error) {
      setData([]);
      setNoData(true);
    }
  };

  useEffect(() => {
    ytVideoHandler();
  }, []);

  return (
    <>
      <Header
        pageName="Youtube"
        iconName="arrow-back"
        navLink={() => navigation.goBack()}
      />
      <YoutubeList data={data} noData={noData} />
    </>
  );
};

export default Youtube;