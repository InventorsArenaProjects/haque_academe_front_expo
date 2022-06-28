import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { courses, testresult } from '../helpers/Request';
//Header
import Header from '../components/Header';
//Screen
import Screen from '../components/Screen';
let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;
const MockTestStart = ({ navigation, route }) => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    retriveCourse();
  }, []);

  const retriveCourse = async () => {
    try {
      const courseId = route.params.courseId;
      const { data } = await courses(courseId);
      setCourse(data.data);
      const response = await testresult(data.data.id)
    } catch (error) {
      console.log(error)
    }
  };
  const startTestHandler = (isPaid,id,cou) => {
    if (isPaid !== '0') {
      navigation.navigate('Premium', cou);
    } else {
      let timeArr = cou.time.split(":");
      navigation.navigate('Question', { quesId: id, quesTime:  Number(timeArr[0]) * 60 * 60 + Number(timeArr[1]) * 60 + Number(timeArr[2])});
    }
  };
  return (
    <Screen>
      <Header
        pageName="Mock Test"
        iconName="arrow-back"
        navLink={() => navigation.goBack()}
      />
      <View style={{ width: '100%', alignItems: 'center' }}>
        <ScrollView>
          {/* <View style={styles.body}> */}
          {course.length !== 0 ? (
            course.map(cou => (
              <View key={cou.id} style={styles.container}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    height: 170,
                  }}>
                  <View
                    style={{
                      width: '100%',
                      height: '80%',
                      flexDirection: 'row',
                    }}>
                    <View style={styles.imageContainer}>
                      <Image
                        style={styles.image}
                        source={require('../assets/images/jee.png')}></Image>
                    </View>

                    <View style={styles.contentContainer}>
                      <Text style={styles.titleText}>{cou.title}</Text>
                      <Text style={styles.subTitleText}>
                        Qustions : {cou.no_of_qus}
                      </Text>
                      <Text style={styles.subTitleText}>
                        Total Marks : {cou.marks}
                      </Text>
                      <Text style={styles.subTitleText}>
                        Time: {cou.time} mints
                      </Text>
                      {/* /////////////////////// */}
                      {cou.is_paid !== '0' ? (
                        <View
                          style={{
                            position: 'absolute',
                            right: 40,
                            top: 5,
                            // height: '30%',
                          }}>
                          <FontAwesome5
                            name="crown"
                            size={25}
                            color={'#DAA520'}
                            onPress={() => navigation.navigate('Premium', {cou : cou})}
                          />
                        </View>
                      ) : (
                        <Text></Text>
                      )}

                      {/* /////////////////////// */}
                    </View>
                  </View>
                  <View
                    style={{
                      // backgroundColor: 'pink',
                      width: '100%',
                      height: '40%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      style={styles.btn}
                      activeOpacity={0.8}
                      onPress={() => startTestHandler(cou.is_paid,cou.id,cou)}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: 'white',
                          fontSize: 19,
                        }}>
                        Start Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <Text>Loading</Text>
          )}
          {/* </View> */}
        </ScrollView>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 198,
    width: W / 1.1,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#A11A0E',
    marginTop: '5%',
    overflow: 'hidden',
  },
  imageContainer: {
    width: '40%',
    height: '100%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '85%',
    width: '65%',
    marginTop: '6%',
  },
  contentContainer: {
    width: '70%',
    height: '100%',
    // backgroundColor: 'pink',
    position: 'relative',
    justifyContent: 'space-evenly',
  },
  titleText: {
    fontSize: 20,
    color: '#A11A0E',
    fontWeight: 'bold',
  },
  subTitleText: {},
  btn: {
    width: '80%',
    height: 41,
    backgroundColor: '#A11A0E',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MockTestStart;
