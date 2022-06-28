import React, { useEffect, useState } from 'react';
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
  ActivityIndicator,
} from 'react-native';
// import Swiper from 'react-native-swiper';
// import LinearGradient from 'react-native-linear-gradient';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import DrawerTab from '../navigation/DrawerTab';
// import HttpHandler from '../utils/HttpHandler';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { sliders } from '../helpers/Request';
import Slider from '../components/Slider';
//Header
import Header from '../components/Header';
//Card
import Card from '../components/Card';
//Screen
import Screen from '../components/Screen';

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

const Dashboard = ({ navigation, route }) => {
  const [sliderImage, setSliderImage] = useState([]);
  const cards = [
    {
      name: 'Mock Test',
      imgLink: require('../assets/images/test.png'),
      navLink: () => navigation.navigate("MockTest"),
    },
    {
      name: 'Your Notes',
      imgLink: require('../assets/images/notes.png'),
      navLink: () => navigation.navigate("YourNotes"),
    },
    {
      name: 'Descriptive Test',
      imgLink: require('../assets/images/descriptive.png'),
      navLink: () => navigation.navigate("DescriptiveTest"),
    },
    {
      name: 'Your Live Class',
      imgLink: require('../assets/images/liveclass.png'),
      navLink: () => navigation.navigate("DescriptiveTest"),
    },
  ];
  //--FETCHING SLIDER IMAGES (START)
  const fetchSliders = async () => {
    const { data } = await sliders();
    console.log('---------10101010---------');
    console.log(data.data);
    console.log('------213265656--------');
    setSliderImage(data.data);
    console.log(sliderImage);
  };
  //--FETCHING SLIDER IMAGES (END)
  useEffect(() => {
    fetchSliders();
  }, []);

  // console.warn(data[0].id)

  return (
    <>
      <Header
        pageName="Dashboard"
        iconName="reorder-three"
        navLink={() => navigation.toggleDrawer()}
        iconSize="L"
      />
      <Screen>
        <ScrollView>
          {/* start of swiper */}
          <View style={styles.slideContainer}>
            {/* <Swiper autoplay showsPagination={false}>
              {sliderImage.length !== 0 ? (
                sliderImage.map((post, i) => (
                  <View key={i} style={styles.slide}>
                    <Image
                      source={{uri: post.image}}
                      resizeMode="cover"
                      style={styles.sliderImage}
                    />
                  </View>
                ))
              ) : (
                <Text>LOading.</Text>
              )}
            </Swiper> */}
            {
              sliderImage.length !== 0 ? <Slider sliderImage={sliderImage} /> : <ActivityIndicator />
            }
          </View>
          {/* end of swiper */}
          <View style={styles.cardContainer}>
            {/* <Card cardName="Mock Test" />
            <Card cardName="Your Notes" />
            <Card cardName="Descriptive Test" />
            <Card cardName="Your Live Class" /> */}
            {cards.map(card => (
              <Card
                key={card.name}
                cardName={card.name}
                imgLink={card.imgLink}
                navLink={card.navLink}
              />
            ))}
            <View style={{ margin: 20 }}></View>
          </View>
        </ScrollView>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  slideContainer: {
    height: 160,
    width: '100%',
    // backgroundColor: "blue",
    marginTop: '3%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  slide: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 5,
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderImage: {
    height: '100%',
    width: '90%',
    marginTop: '5%',
    borderRadius: 5,
  },
  cardContainer: {
    // backgroundColor: "green",
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dashboard;
