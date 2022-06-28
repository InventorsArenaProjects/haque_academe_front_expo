import React, { useState, useContext, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
  Image,
  Text,
  ActivityIndicator
} from 'react-native';
// --------------- Third Party Components -------------- 
import AsyncStorage from '@react-native-async-storage/async-storage';
// --------------- Custom Components --------------
import { GlobalContext } from '../context/Provider';
import login from '../context/actions/login'
import CourceCard from '../components/cards/CourceCard'
import color from '../globalStyles/color';
import { LOGIN } from "../constants/routeNames";

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

const CoursesArray = [
  {
    // imageLink: require('../assets/images/student_1.png'),
    imageLink: "https://firebasestorage.googleapis.com/v0/b/taraknathapp.appspot.com/o/student_1.png?alt=media&token=c4349ef8-4fb4-4a5b-b1fe-558c44e677be",
    courseName: 'Class VIII',
    courseID: "1"
  },
  {
    imageLink: "https://firebasestorage.googleapis.com/v0/b/taraknathapp.appspot.com/o/student_1.png?alt=media&token=c4349ef8-4fb4-4a5b-b1fe-558c44e677be",
    courseName: 'Class IX',
    courseID: "2"
  },
  {
    imageLink: "https://firebasestorage.googleapis.com/v0/b/taraknathapp.appspot.com/o/student_1.png?alt=media&token=c4349ef8-4fb4-4a5b-b1fe-558c44e677be",
    courseName: 'Class X',
    courseID: "3"
  },
  {
    imageLink: "https://firebasestorage.googleapis.com/v0/b/taraknathapp.appspot.com/o/student_1.png?alt=media&token=c4349ef8-4fb4-4a5b-b1fe-558c44e677be",
    courseName: 'Class XI',
    courseID: "4"
  },
  {
    imageLink: "https://firebasestorage.googleapis.com/v0/b/taraknathapp.appspot.com/o/student_1.png?alt=media&token=c4349ef8-4fb4-4a5b-b1fe-558c44e677be",
    courseName: 'Class XII',
    courseID: "5"
  },
  {
    imageLink: "https://firebasestorage.googleapis.com/v0/b/taraknathapp.appspot.com/o/student_1.png?alt=media&token=c4349ef8-4fb4-4a5b-b1fe-558c44e677be",
    courseName: 'Class NEET',
    courseID: "6"
  },
  {
    imageLink: "https://firebasestorage.googleapis.com/v0/b/taraknathapp.appspot.com/o/student_1.png?alt=media&token=c4349ef8-4fb4-4a5b-b1fe-558c44e677be",
    courseName: 'JEE MAINS AND ADVANCE',
    courseID: "7"
  },
];
// console.warn(CoursesArray[0].imageLink);

const HomeScreen = ({ navigation }) => {

  const componentMounted = useRef(true); // (3) component is mounted
  const { authDispatch, authState: { isLoggedIn } } = useContext(GlobalContext);
  const [checkRemembered, setCheckRemembered] = useState(true);

  const checkUser = async () => {
    try {
      let course_id = await AsyncStorage.getItem('course_id');
      let email = await AsyncStorage.getItem('email');
      let password = await AsyncStorage.getItem('password');
      if (course_id !== null && email !== null && password !== null) {
        login({ 'course_id': course_id, 'email': email, 'password': password })(authDispatch);
      } else {
        setCheckRemembered(false);
      }

    } catch (err) {
      setCheckRemembered(false);
    }
  }

  useEffect(() => {
    checkUser();
    return () => (componentMounted.current = false)
  }, [])

  const navLink = (courseID) => {
    navigation.navigate(LOGIN, { course_id: courseID })
  }
  return (
    <>
      {
        checkRemembered ?
          <View style={styles.loader}>
            <ActivityIndicator size="large" color={color.colorSecondary} />
            <Text style={{ fontWeight: "bold", fontSize: 14, marginTop: 8 }}>Please wait ..</Text>
          </View>
          :
          <>
            <StatusBar
              animated={true}
              backgroundColor={color.colorPrimary}
              barStyle={"light-content"}
              showHideTransition={"slide"}
              hidden={false} />

            <ScrollView keyboardShouldPersistTaps={'handled'}>
              <View style={styles.logoContainer}>
                <Image
                  style={styles.headerimage}
                  source={require('../assets/images/edulogo.png')} />
              </View>
              <View style={styles.courcesContainer}>
                {CoursesArray.map((item) => (
                  <CourceCard key={item.courseID} navLink={() => navLink(item.courseID)} cardData={item} />
                ))}
              </View>
            </ScrollView>
          </>
      }
    </>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: H / 4
  },
  headerimage: {
    resizeMode: "contain",
    height: 130
  },
  courcesContainer: {
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: "5%"
  },

  textstyle: {
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center'
  },

});

export default HomeScreen;
