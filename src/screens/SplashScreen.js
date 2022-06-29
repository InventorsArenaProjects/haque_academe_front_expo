// ----------- System Components -----------  
import React, { useEffect, useRef } from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
  ImageBackground,
  Animated,
  SafeAreaView
} from 'react-native';
// ------------ Third Party Components ------------  
// ------------ Custom Components ------------
import color from '../globalStyles/color'
// ------------ Constants ------------  
let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

const Splashscreen = ({ navigation }) => {
  const moveAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 2000);
    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 1000,
        toValue: Dimensions.get('window').width / 1.6,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnim, {
        duration: 1000,
        toValue: 0,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(fadeAnim, {
      duration: 1000,
      toValue: 1,
      delay: 1000,
      useNativeDriver: false,
    }).start();
  }, [moveAnim, fadeAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={color.colorPrimary}
        barStyle={"light-content"}
        showHideTransition={"slide"}
        hidden={false} />
      <ImageBackground
        blurRadius={3}
        style={{
          height: H,
          width: W,
          alignItems: "center",
          justifyContent: 'center',
        }}
        source={require('../assets/images/splashscreen.jpg')}>
        <Animated.Image
          style={[styles.image, { opacity: fadeAnim }]}
          source={require('../assets/images/edulogo.png')}
        />
        <Animated.View style={[styles.logoContainer, { marginLeft: moveAnim }]}>
          <Text style={[styles.logoText]}>HAwk </Text>
          <Animated.Text style={[styles.logoText, { opacity: fadeAnim }]}>
            ACademe
          </Animated.Text>
        </Animated.View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  logoText: {
    fontSize: 35,
    color: 'black',
    fontWeight: '700',
  },
  contentContainer: {
    top: '40%',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 150,
    marginLeft: "12%",
  },
  logoContainer: {
    flexDirection: 'row',
  },
});
export default Splashscreen;