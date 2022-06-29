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
  Alert,
  Modal,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
// ------------- Third Party Components ------------- 
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { clockRunning } from 'react-native-reanimated';
import CountDown from 'react-native-countdown-component';
// ------------- Custom Components ------------- 
import { DASHBOARD } from '../constants/routeNames'
import { mcqQues } from '../helpers/Request';
import Btn from "../components/commons/buttons/Btn";
import color from "../globalStyles/color";
import Header from '../components/Header';
import Screen from '../components/Screen';
import { mcqtest, mcqtestsubmit, getTestResult } from '../helpers/Request';
import TestResultModal from '../components/modals/TestResultModal'
import TestMenuModal from '../components/modals/TestMenuModal'
// ------------- Constants ------------- 
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const Question = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const [quesId, setQuesId] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [ansOptions, setAnsOptions] = useState([]);
  const [chosenAns, setchosenAns] = useState(null);
  const [allAnswer, setAllAnswer] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [mcqResult, setMcqResult] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [noData, setNoData] = useState(false);


  const retriveQuestions = async () => {
    try {
      const { data } = await mcqQues(route.params.quesId);
      if (data.data.length > 1) {
        let temp = data.data.map(v => ({ ...v, attStatus: null }));
        if (temp.length !== 0) {
          setNoData(false);
          setQuestions(temp);
        } else {
          setNoData(true);
          setQuestions([]);
        }
      }

    } catch (error) {
      console.log(error);
    }
    setIsLoaded(true);
  };

  const ansHandler = async (ansId, quesId) => {
    // Alert.alert(ansId,quesId);
    let idObj = {
      test_question_id: quesId,
      option_id: ansId,
    };
    const response = await mcqtest(idObj);
    console.log(response);
  };

  const submitAnsHandler = async quesId => {
    try {
      setLoading(true);
      let idObj = {
        test_id: quesId
      };
      const response = await mcqtestsubmit(idObj);
      if (response.status) {
        const res = await getTestResult(route.params.quesId);
        setLoading(false);
        if (res.status) {
          setMcqResult(res.data.data);
          setShowResult(true);
        }
      }else{
        setLoading(false);
      }
    } catch (error) {
      console.log(error)
    }

    if (chosenAns !== null) {
      nextAnsHandler(quesId);
    }
  };
  const goBackHandler = () => {
    setQuesId('');
    navigation.goBack();
  };
  
  const nextAnsHandler = async quesId => {
    if (chosenAns === null) {
      let data = questions;
      data[currentQuestion].attStatus = 3;
      setQuestions(data);
      if (questions.length - 1 > currentQuestion) {
        setCurrentQuestion(currentQuestion + 1);
      }
    } else {
      let idObj = {
        test_question_id: quesId,
        option_id: chosenAns,
      };
      const response = await mcqtest(idObj);
      let data = questions;
      data[currentQuestion].attStatus = 1;
      setQuestions(data);
      setchosenAns(null);
      if (questions.length - 1 > currentQuestion) {
        setCurrentQuestion(currentQuestion + 1);
      }
    }
  };

  const markAsReadHandler = quesId => {
    let data = questions;
    data[currentQuestion].attStatus = 2;
    setQuestions(data);
    if (questions.length - 1 > currentQuestion) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const changeQuestionHandler = quesId => {
    let data = questions;

    if (data[currentQuestion].attStatus === null) {
      data[currentQuestion].attStatus = 3;
      setQuestions(data);
      setCurrentQuestion(quesId);
      setchosenAns(null);
    } else {
      setCurrentQuestion(quesId);
      setchosenAns(null);
    }
  };

  const showResultHandler = (show) => {
    setShowResult(show);
  }
  const showMenuHandler = (show) => {
    setModalVisible(show);
  }

  useEffect(() => {
    retriveQuestions();
    setQuesId(route.params.quesId);
  }, []);

  return (
    <Screen>
      <Header
        pageName="Mock Test"
        iconName="arrow-back"
        navLink={() => navigation.goBack()}
      />
      {
        questions.length !== 0 && questions[currentQuestion].options.length !== 0 ?
          <View style={{ backgroundColor: 'white', minHeight: H }}>
            <View style={styles.fDiv}>
              <Text style={{ textAlign: 'center', color: 'black' }}>
                Question No: {currentQuestion + 1}
              </Text>
              <View style={{}}>
                {/* <Text style={{ textAlign: 'center' }}>O1:59:59</Text> */}
                <CountDown
                  until={route.params.quesTime}
                  size={15}
                  onFinish={() => {
                    Alert.alert(
                      "Time is over",
                      "Press ok",
                      [
                        {
                          text: "OK", onPress: () => {
                            navigation.replace(DASHBOARD)
                          }
                        }
                      ])
                  }}
                  digitStyle={{ backgroundColor: '#FFF', borderColor: color.colorSecondary, borderWidth: 1 }}
                  digitTxtStyle={{ color: color.colorPrimary }}
                  timeToShow={['H', 'M', 'S']}
                  timeLabels={{ h: 'HH', m: 'MM', s: 'SS' }}
                />
              </View>
            </View>
            <View style={styles.sDiv}>
              {isLoaded ? (
                <Text
                  style={{ textAlign: 'center', marginTop: '3%', color: 'black' }}>
                  Q. {questions[currentQuestion].qus_text}
                </Text>
              ) : (
                <View>
                  <Text>Loading</Text>
                </View>
              )}
            </View>
            <View style={styles.tDiv}>
              {isLoaded ? (
                <View style={styles.answersContainer}>
                  <TouchableOpacity
                    style={
                      chosenAns === questions[currentQuestion].options[0].id
                        ? styles.chosenAnswers
                        : styles.answers
                    }
                    onPress={() =>
                      setchosenAns(questions[currentQuestion].options[0].id)
                    }>
                    <View
                      style={{
                        height: 20,
                        width: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 100,
                        marginRight: '5%',
                        borderWidth: 1,
                        borderColor:
                          chosenAns === questions[currentQuestion].options[0].id
                            ? '#FFFFFF'
                            : '#A11A0E',
                      }}>
                      <View
                        style={{
                          height: '50%',
                          width: '50%',
                          backgroundColor: '#FFFFFF',
                          borderRadius: 100,
                        }}></View>
                    </View>
                    <Text
                      style={{
                        color:
                          chosenAns === questions[currentQuestion].options[0].id
                            ? '#FFFFFF'
                            : '#A11A0E',
                      }}>
                      {questions[currentQuestion].options[0].option}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={
                      chosenAns === questions[currentQuestion].options[1].id
                        ? styles.chosenAnswers
                        : styles.answers
                    }
                    onPress={() =>
                      // ansHandler(
                      //   questions[currentQuestion].options[1].id,
                      //   questions[currentQuestion].id,
                      // )
                      setchosenAns(questions[currentQuestion].options[1].id)
                    }>
                    <View
                      style={{
                        height: 20,
                        width: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 100,
                        marginRight: '5%',
                        borderWidth: 1,
                        borderColor:
                          chosenAns === questions[currentQuestion].options[1].id
                            ? '#FFFFFF'
                            : '#A11A0E',
                      }}>
                      <View
                        style={{
                          height: '50%',
                          width: '50%',
                          backgroundColor: '#FFFFFF',
                          borderRadius: 100,
                        }}></View>
                    </View>
                    <Text
                      style={{
                        color:
                          chosenAns === questions[currentQuestion].options[1].id
                            ? '#FFFFFF'
                            : '#A11A0E',
                      }}>
                      {questions[currentQuestion].options[1].option}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={
                      chosenAns === questions[currentQuestion].options[2].id
                        ? styles.chosenAnswers
                        : styles.answers
                    }
                    onPress={() =>
                      setchosenAns(questions[currentQuestion].options[2].id)
                    }>
                    <View
                      style={{
                        height: 20,
                        width: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 100,
                        marginRight: '5%',
                        borderWidth: 1,
                        borderColor:
                          chosenAns === questions[currentQuestion].options[2].id
                            ? '#FFFFFF'
                            : '#A11A0E',
                      }}>
                      <View
                        style={{
                          height: '50%',
                          width: '50%',
                          backgroundColor: '#FFFFFF',
                          borderRadius: 100,
                        }}></View>
                    </View>
                    <Text
                      style={{
                        color:
                          chosenAns === questions[currentQuestion].options[2].id
                            ? '#FFFFFF'
                            : '#A11A0E',
                      }}>
                      {questions[currentQuestion].options[2].option}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={
                      chosenAns === questions[currentQuestion].options[3].id
                        ? styles.chosenAnswers
                        : styles.answers
                    }
                    onPress={() =>
                      setchosenAns(questions[currentQuestion].options[3].id)
                    }>
                    <View
                      style={{
                        height: 20,
                        width: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 100,
                        marginRight: '5%',
                        borderWidth: 1,
                        borderColor:
                          chosenAns === questions[currentQuestion].options[3].id
                            ? '#FFFFFF'
                            : '#A11A0E',
                      }}>
                      <View
                        style={{
                          height: '50%',
                          width: '50%',
                          backgroundColor: '#FFFFFF',
                          borderRadius: 100,
                        }}></View>
                    </View>
                    <Text
                      style={{
                        color:
                          chosenAns === questions[currentQuestion].options[3].id
                            ? '#FFFFFF'
                            : '#A11A0E',
                      }}>
                      {questions[currentQuestion].options[3].option}
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View>
                  <ActivityIndicator />
                </View>
              )}
            </View>
            {/* Fouth Div=---------------- */}
            <View style={styles.fourthDiv}>
              <View
                style={{
                  borderRadius: 25,
                  height: 50,
                  width: 50,
                  backgroundColor: '#9E1510',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '2%',
                  marginLeft: '80%',
                }}>
                {/* //------------------------- */}
                <>
                  <TestResultModal showResult={showResult} showResultHandler={showResultHandler} mcqResult={mcqResult} />
                  <TestMenuModal showMenu={modalVisible} showMenuHandler={showMenuHandler} questions={questions} changeQuestionHandler={changeQuestionHandler} />
                </>
                {/* //--------------------------------------------------------------------- */}
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Entypo
                    name="menu"
                    size={30}
                    // onPress={() => navigation.navigate('MenuQuestion')}
                    color={'white'}
                    style={{}}></Entypo>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.fiveDiv}>
              <TouchableOpacity
                style={styles.footerView}
                onPress={() => markAsReadHandler()}>
                <Text style={styles.footertext}>Mark As Read</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.footerView}
                onPress={() => setchosenAns(null)}>
                <Text style={styles.footertext}>Clear Response</Text>
              </TouchableOpacity>
              {/* //------------------------- */}
              {questions.length - 1 > currentQuestion ? (
                <TouchableOpacity
                  style={styles.footerViewsubmit}
                  onPress={() => nextAnsHandler(questions[currentQuestion].id)}>
                  <Text style={styles.footertextsubmit}>Next</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  disabled={loading}
                  style={styles.footerViewsubmit}
                  onPress={() => submitAnsHandler(questions[currentQuestion].id)}>
                    {loading?<ActivityIndicator size="small" color="#fff" />:<Text style={styles.footertextsubmit}>Submit</Text>}
                </TouchableOpacity>
              )}
            </View>
          </View> :
          !noData ?
            <ActivityIndicator size="large" color="#00ff00" />
            :
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Image source={require('../assets/no-data.png')} style={{ height: 50, width: 50 }} />
              <Text style={{ fontWeight: "bold", marginTop: 8 }}>No Result Found</Text>
            </View>
      }

    </Screen>
  );
};

const styles = StyleSheet.create({
  fDiv: {
    height: 60,
    // backgroundColor:'yellow',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    textAlign: 'center',
    // borderBottomColor: 'gray',
    // borderBottomWidth: 1,
    backgroundColor: 'white',
    elevation: 20,
  },
  sDiv: {
    height: 70,
    backgroundColor: 'white',
    marginTop: '1%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // backgroundColor:'yellow',
    // borderBottomColor: 'gray',
    // borderBottomWidth: 1,
    elevation: 20,
  },
  tDiv: {
    height: 250,
    backgroundColor: 'white',
    marginTop: '2%',
    // padding: '1%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: 'yellow',
    borderBottomColor: '#f5eeed',
    borderBottomWidth: 2,
  },
  fourthDiv: {
    height: 100,
    marginTop: '3%',
    justifyContent: 'center',
    // backgroundColor: 'pink',
    borderBottomColor: '#f5eeed',
    borderBottomWidth: 2,
  },
  answersContainer: {
    height: '90%',
    width: '80%',
    // backgroundColor: 'red',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  answers: {
    // backgroundColor: '#A11A0E',
    borderWidth: 1,
    borderColor: '#A11A0E',
    alignItems: 'center',
    borderRadius: 5,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: '10%',
  },
  chosenAnswers: {
    backgroundColor: '#A11A0E',
    borderRadius: 5,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: '10%',
  },
  fiveDiv: {
    height: 100,
    // backgroundColor:'yellow',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  footerTextContainer: {},
  footertext: {
    textAlign: 'center',
    color: 'black',
  },
  footerView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%',
    height: '30%',
    backgroundColor: '#fff',
    marginTop: '10%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#9E1510',
  },
  footerViewsubmit: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%',
    height: '30%',
    width: '27%',
    height: '30%',
    backgroundColor: '#9E1510',
    marginTop: '10%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#9E1510',
  },
  footertextsubmit: {
    textAlign: 'center',
    color: 'white',
  },
  //-----------------------
  //Outer POrtion Of Modal
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // marginTop: 22,
    // backgroundColor: "red"
  },
  //Inner portion of Modal
  modalView: {
    height: '90%',
    width: '80%',
    // margin: 20,
    backgroundColor: 'white',
    // borderRadius: 10,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  secondpos2: {
    justifyContent: 'center',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginTop: '1%',
    borderBottomColor: 'gray',
    flexDirection: 'row',
  },
  thirdpos3: {
    flex: 1 / 3,
    //backgroundColor:'yellow',
    borderBottomColor: 'gray',
    marginHorizontal: 10,
    // borderBottomWidth: 1,
    // elevation: 5,
  },
});
export default Question;
