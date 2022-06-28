// ------------- System Components -------------  
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
} from 'react-native';
import React from 'react';
// ------------- Third Party Components ------------- 
import Ionicons from 'react-native-vector-icons/Ionicons';
// ------------- Custom Components ------------- 
import color from '../globalStyles/color'
// ------------- Constants -------------  
let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

const Header = ({pageName, iconName, navLink,iconSize}) => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={color.colorPrimary}
      />

      <View
        style={{
          width: W,
          height: H/9,
          flexDirection: 'row',
          backgroundColor: color.colorPrimary,
          justifyContent: 'space-between',
          paddingHorizontal: '2.5%',
          alignItems: 'center',
          marginTop: StatusBar.height
        }}>
        <TouchableOpacity onPress={navLink} style={{width: "10%" , height: "60%", justifyContent: "center", alignItems: "center"}}>
          <Ionicons name={iconName} size={iconSize === "L" ? 45 : 30} color={'white'} />
        </TouchableOpacity>
        <Text style={{fontSize: 20, color: 'white'}}> {pageName}</Text>
        <Image
          source={require('../assets/images/logo2.png')}
          style={{
            width: 49,
            height: 49,
            justifyContent: 'center',
            resizeMode: 'center',
          }}
        />
      </View>
    </>
  );
};

export default Header;
