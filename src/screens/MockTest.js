// ----------- System Components ----------- 
import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator
} from 'react-native';
// ----------- Third Party Components ----------- 
// import Swiper from 'react-native-swiper';
// import LinearGradient from 'react-native-linear-gradient';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// ----------- Custom Components -----------
import { subjects } from '../helpers/Request';
import Header from '../components/Header';
import Screen from '../components/Screen';
import Card from '../components/Card';
import SubList from '../components/lists/SubList'
// ----------- Constants ----------- 
let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

const MockTest = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [noData, setNoData] = useState(false);

  const getSubjectsHandler = async () => {
    try {
      const res = await subjects();
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
    getSubjectsHandler();
  }, []);

  return (
    <Screen>
      <Header
        pageName="Subjects"
        iconName="arrow-back"
        navLink={() => navigation.goBack()}
      />
      <SubList data={data} noData={noData} type="mcqTest"/>
    </Screen>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 120,
    width: '90%',
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
});
export default MockTest;
