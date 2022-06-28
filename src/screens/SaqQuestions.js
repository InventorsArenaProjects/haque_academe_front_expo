// ------------ System Components ------------
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  Modal,
  Alert
} from 'react-native';
import React, { useState, useEffect } from 'react';
// ------------ Third Party Components ------------
import AntDesign from 'react-native-vector-icons/AntDesign';
import DocumentPicker from 'react-native-document-picker';
import CountDown from 'react-native-countdown-component';
// ------------ Custom Components ------------
import { DASHBOARD } from '../constants/routeNames'
import Header from '../components/Header';
import SaqQuestionsList from '../components/lists/SaqQuestionList';
import { submitSaqTest, getSaqTestInfo } from '../helpers/Request';
import color from '../globalStyles/color';
import Btn from '../components/commons/buttons/Btn'
// ------------ Constants ------------
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const SaqQuestions = ({ navigation, route }) => {
  const [questions, setQuestions] = useState([]);
  const [noData, setNoData] = useState(false);
  const [sendAnswer, setSendAnswer] = useState(false);

  const [answer, setAnswer] = useState({ name: "No selected file" });
  const [noSheetErr, setNoSheetErr] = useState("");
  const [uploading, setUploading] = useState(false);

  // -------------- OPEN PDF AND UPLOAD FUNCTION --------------
  const submitAnswerHandler = async () => {
    try {
      if (answer && answer.name !== "No selected file") {
        setNoSheetErr("");
        const formData = new FormData();
        formData.append('answer', {
          uri: answer.uri,
          type: answer.type,
          name: answer.name,
        });
        setUploading(true);
        let res = await submitSaqTest(route.params.quesId, formData);
        setUploading(false);

        if (res.status) {
          Alert.alert(
            "Submited Sucessfully",
            "Press ok",
            [
              { text: "OK", onPress: () => navigation.replace(DASHBOARD) }
            ]);
        } else {
          Alert.alert(
            "Something went wrong",
            "Please try again later",
            [
              { text: "OK", onPress: () => navigation.replace(DASHBOARD) }
            ])
        }
      } else {
        setNoSheetErr("Your Answeer Sheet is required");
      }
    } catch (err) {
      setNoSheetErr("Something went wrong");
    }
  };

  // -------------- OPEN PDF AND UPLOAD FUNCTION --------------
  const openDocumentFile = async () => {
    try {
      const file = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setAnswer(file[0]);

    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  };

  // -------------- GET ALL TEST QUESTIONS --------------
  const getTestHandler = async () => {
    try {
      let res = await getSaqTestInfo(route.params.quesId);
      if (res.status && res.data.data !== null) {
        setQuestions(res.data.data);
        setNoData(false);
      } else {
        setQuestions([]);
        setNoData(true);
      }
    } catch (error) {
      setQuestions([]);
      setNoData(true);
    }
  };

  useEffect(() => {
    getTestHandler();
  }, []);

  return (
    <>
      <Modal
        visible={sendAnswer}
        animationType="fade"
        transparent={true}
      >
        <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}>
          <View style={{
            height: H / 1.8,
            width: W / 1.1,
            borderRadius: 5,
            backgroundColor: "white",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <View style={{ width: "87%", alignItems: "center", justifyContent: "center", marginTop: "5%" }}>
              <Text style={{ textAlign: "center", width: "79%", fontSize: 18, color: "grey", fontWeight: "bold" }}>Select your answer PDF and press submit button</Text>
            </View>
            <View style={{ width: "100%", alignItems: "center", justifyContent: "center", height: H / 5, marginBottom: "5%" }}>
              <Text style={{ color: "red" }}>{noSheetErr}</Text>
              <View style={{
                borderRadius: 8,
                borderColor: "grey",
                borderWidth: 1,
                width: "80%",
                height: H / 15,
                justifyContent: "center",
                paddingHorizontal: "2%"
              }}>
                <Text>{answer.name}</Text>
              </View>
              <TouchableOpacity style={{ marginTop: "2%" }} onPress={openDocumentFile}>
                <Text style={{ width: "79%", fontSize: 18, color: "blue" }}>Select</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "100%", alignItems: "center", justifyContent: "space-between", height: H / 7, marginBottom: "6%" }}>
              <Btn
                title={<Text style={{ fontSize: 14, fontWeight: "bold", color: color.whiteColor }}>Submit</Text>}
                color={color.colorPrimary}
                style={{ width: "80%" }}
                submitListener={submitAnswerHandler}
                isLoading={uploading}
              />
              <Btn
                title={<Text style={{ fontSize: 14, fontWeight: "bold", color: color.whiteColor }}>Back to Question</Text>}
                color={color.colorPrimary}
                style={{ width: "80%" }}
                submitListener={() => setSendAnswer(false)}
              />
            </View>
          </View>
        </View>
      </Modal>

      <Header
        pageName="Select SAQ Test"
        iconName="arrow-back"
        navLink={() => navigation.goBack()}
      />
      <View style={{ marginTop: "2%" }}>
        <CountDown
          until={route.params.quesTime}
          size={15}
          onFinish={() => {
            Alert.alert(
              "Time is over",
              "Press ok",
              [
                { text: "OK", onPress: () => navigation.replace(DASHBOARD) }
              ])
          }}
          digitStyle={{ backgroundColor: '#FFF', borderColor: color.colorSecondary, borderWidth: 1 }}
          digitTxtStyle={{ color: color.colorPrimary }}
          timeToShow={['H', 'M', 'S']}
          timeLabels={{ h: 'HH', m: 'MM', s: 'SS' }}
        />
      </View>

      <View style={styles.questionContainer}>
        <TouchableOpacity
          style={styles.questionbtn}
          activeOpacity={0.8}
          onPress={() => {
            setSendAnswer(true);
            setAnswer({ name: "No selected file" });
            setNoSheetErr("");
          }}>
          <Text style={styles.questionTxt}>Sent Attachmemts</Text>
          {uploading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <AntDesign name={'upload'} size={20} color={color.whiteColor} />
          )}
        </TouchableOpacity>

      </View>
      <SaqQuestionsList data={questions} noData={noData} />
    </>
  );
};

export default SaqQuestions;

const styles = StyleSheet.create({
  questionbtn: {
    height: H / 18,
    borderColor: color.colorSecondary,
    backgroundColor: color.colorSecondary,
    borderWidth: 2,
    width: '80%',
    // marginTop: '5%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  questionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionTxt: {
    color: color.whiteColor,
    fontSize: 16,
    marginRight: 12,
  },
});
