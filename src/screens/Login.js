// -------------- System Components -------------- 
import React from 'react';
import { View, StyleSheet, Dimensions, Text, Image, StatusBar, Keyboard, ScrollView } from 'react-native';

// -------------- Custom Components --------------
import color from '../globalStyles/color'
import LoginForm from '../components/forms/LoginForm'
// -------------- Constants --------------
let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

const Login = ({ navigation, route }) => {
  const course_id = route.params.course_id;

  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={color.colorPrimary}
      />
      <ScrollView style={styles.container} keyboardShouldPersistTaps={"always"}>
        <View style={styles.imgContainer}>
          <Image style={styles.headerimage} source={require('../assets/images/edulogo.png')}></Image>
          <Text style={styles.brandName}>Hawk Academe</Text>
        </View>
        <LoginForm course_id={course_id} />
      </ScrollView>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.height
  },
  imgContainer: {
    height: H / 3.5,
    justifyContent: "center",
    alignItems: "center"
  },
  headerimage: {
    height: 130,
    resizeMode: "contain",
    marginLeft: 35
  },
  brandName: {
    fontSize: 20,
    fontWeight: "bold"
  }
})
export default Login;

