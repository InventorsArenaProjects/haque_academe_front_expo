// import { StyleSheet, Text, View, Alert, TextInput, Pressable, Dimensions } from 'react-native'
// import React, { useState } from 'react'
// //
// import color from '../globalStyles/color'
// //
// import Header from '../components/Header'
// import Screen from '../components/Screen'
// import Input from '../components/commons/inputs/Input'
// import SecureInput from '../components/commons/inputs/SecureInput'
// import FormBtn from '../components/commons/buttons/Btn'
// import Btn from '../components/commons/buttons/Btn'
// // ---------------- Third Party Components ----------------
// import Entypo from "react-native-vector-icons/Entypo";
// import EyeIcon from 'react-native-vector-icons/Entypo'

// const W = Dimensions.get('window').width;
// const H = Dimensions.get('window').height;

// const ChangePassword = ({ navigation }) => {

//     const [oldPass, setOldPass] = useState("");
//     const [newPass, setNewPass] = useState("");
//     const [confirmPass, setConfirmPass] = useState("");

//     const changePasswordHandler = () => {
//         Alert.alert("Password Changed!");
//         navigation.goBack()
//     }
//     return (
//         <Screen>
//             <Header
//                 pageName="Change Password"
//                 iconName="arrow-back"
//                 navLink={() => navigation.goBack()}
//             />
//             <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
//                 <View style={{ height: "80%", minHeight: H / 2.2, width: "80%", alignItems: "center",marginTop: 10 }}>
//                     <SecureInput
//                         logo={<Entypo name="key" size={20} color={'grey'} />}
//                         changeListener={(text) => setOldPass(text)}
//                         placeholder={"Old password"}
//                         styleContainer={{ marginTop: "5%", borderRadius: 8, borderWidth: 1, borderColor: "grey",marginVertical: 10 }}
//                         styleInput={{ borderRadius: 8 }}
//                     // errMsg={invalidErr.password}
//                     />
//                     <SecureInput
//                         logo={<Entypo name="key" size={20} color={'grey'} />}
//                         changeListener={(text) => setNewPass(text)}
//                         placeholder={"New password"}
//                         styleContainer={{ marginTop: "5%", borderRadius: 8, borderWidth: 1, borderColor: "grey",marginVertical: 10 }}
//                         styleInput={{ borderRadius: 8 }}
//                     // errMsg={invalidErr.password}
//                     />
//                     <SecureInput
//                         logo={<Entypo name="key" size={20} color={'grey'} />}
//                         changeListener={(text) => setConfirmPass(text)}
//                         placeholder={"Confirm New password"}
//                         styleContainer={{ marginTop: "5%", borderRadius: 8, borderWidth: 1, borderColor: "grey" }}
//                         styleInput={{ borderRadius: 8 }}
//                     // errMsg={invalidErr.password}
//                     />

//                     <Btn
//                         title={<Text style={{ fontSize: 14, fontWeight: "bold", color: color.whiteColor }}>Change Password</Text>}
//                         color={color.colorPrimary}
//                         style={{ width: "100%",marginVertical: 35 }}
//                         submitListener={() => changePasswordHandler()}
//                     // isLoading={uploading}
//                     />
//                 </View>
//             </View>
//         </Screen>
//     )
// }

// export default ChangePassword;

import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  Pressable,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
//
import color from '../globalStyles/color';
//
import Header from '../components/Header';
import Screen from '../components/Screen';
import Input from '../components/commons/inputs/Input';
import SecureInput from '../components/commons/inputs/SecureInput';
import FormBtn from '../components/commons/buttons/Btn';
import Btn from '../components/commons/buttons/Btn';
// ---------------- Third Party Components ----------------
import Entypo from 'react-native-vector-icons/Entypo';
import EyeIcon from 'react-native-vector-icons/Entypo';
//
import {changePassword} from '../helpers/Request';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const ChangePassword = ({navigation}) => {
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const changePasswordHandler = async () => {
    const data = {
      old_password: oldPass,
      new_password: newPass,
      confirm_new_password: confirmPass,
    };

    const req = await changePassword(data);

    if (req.data.status) {
      Alert.alert('Password Changed Please Log Out!');
    } else {
      Alert.alert('Wrong Credentials!');
    }
  };
  return (
    <Screen>
      <Header
        pageName="Change Password"
        iconName="arrow-back"
        navLink={() => navigation.goBack()}
      />
      <View style={{flex: 1, width: '100%', alignItems: 'center'}}>
        <View
          style={{
            height: '80%',
            minHeight: H / 2.2,
            width: '80%',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <SecureInput
            logo={<Entypo name="key" size={20} color={'grey'} />}
            changeListener={text => setOldPass(text)}
            placeholder={'Old password'}
            styleContainer={{
              marginTop: '5%',
              borderRadius: 8,
              borderWidth: 1,
              borderColor: 'grey',
              marginVertical: 10,
            }}
            styleInput={{borderRadius: 8}}
            // errMsg={invalidErr.password}
          />
          <SecureInput
            logo={<Entypo name="key" size={20} color={'grey'} />}
            changeListener={text => setNewPass(text)}
            placeholder={'New password'}
            styleContainer={{
              marginTop: '5%',
              borderRadius: 8,
              borderWidth: 1,
              borderColor: 'grey',
              marginVertical: 10,
            }}
            styleInput={{borderRadius: 8}}
            // errMsg={invalidErr.password}
          />
          <SecureInput
            logo={<Entypo name="key" size={20} color={'grey'} />}
            changeListener={text => setConfirmPass(text)}
            placeholder={'Confirm New password'}
            styleContainer={{
              marginTop: '5%',
              borderRadius: 8,
              borderWidth: 1,
              borderColor: 'grey',
            }}
            styleInput={{borderRadius: 8}}
            // errMsg={invalidErr.password}
          />

          <Btn
            title={
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: color.whiteColor,
                }}>
                Change Password
              </Text>
            }
            color={color.colorPrimary}
            style={{width: '100%', marginVertical: 35}}
            submitListener={() => changePasswordHandler()}
            // isLoading={uploading}
          />
        </View>
      </View>
    </Screen>
  );
};

export default ChangePassword;
