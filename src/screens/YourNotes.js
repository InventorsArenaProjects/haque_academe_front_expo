// ------------ System Components ------------ 
import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Image,
  SafeAreaView,
} from 'react-native';
// ------------ Third Party Components ------------ 
// import Swiper from 'react-native-swiper';
// import LinearGradient from 'react-native-linear-gradient';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// ------------ Custom Components ------------ 
import { subjects } from '../helpers/Request';
import Header from '../components/Header';
import Card from '../components/Card';
import Screen from '../components/Screen';
import SubList from '../components/lists/SubList'
// ------------ Constants ------------ 
let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

const YourNotes = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [noData, setNoData] = useState(false);


  const retriveSubjects = async () => {
    try {
      const res = await subjects();
      if (res.status) {
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
    retriveSubjects();
  }, []);

  
  return (
    <Screen>
      <Header
        pageName="Your Notes"
        iconName="arrow-back"
        navLink={() => navigation.goBack()}
      />
      {/* end of heading code */}
      {/* <ScrollView>
        <View style={{flex: 8, backgroundColor: 'white',justifyContent: "center",alignItems: "center"}}>
          {subject.length !== 0 ? (
            subject.map((post, i) => (
              <View key={i} style={styles.body}>
                <Card
                  cardName={post.title}
                  imgLink={require('../assets/images/mockbook.png')}
                  navLink={() => navFunc(post.id)}
                />
              </View>
            ))
          ) : (
            <ActivityIndicator></ActivityIndicator>
          )}
        </View>
      </ScrollView> */}
      <SubList data={data} noData={noData} type="notes" />
    </Screen>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 10,
    // marginBottom:'50%',
    backgroundColor: 'white',
    // padding:'10%',
    //  flex:8
  },
  // btn: {
  //   height: 120,
  //   width: '90%',
  //   marginTop: 30,
  //   marginLeft: '5%',
  //   borderRadius: 20,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  btn: {
    height: 120,
    width: '90%',
    marginTop: 30,
    marginLeft: '5%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#A11A0E',
    borderWidth: 1,
  },
  bookimage: {
    height: '200%',
    width: '20%',
    marginRight: '12%',
    marginTop: '-4%',
  },
});
export default YourNotes;
