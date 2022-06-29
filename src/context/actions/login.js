import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../../helpers/Request'
import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAIL } from '../../constants/actionTypes'

const rememberUser = async (token, course_id, email, password) => {
    try {
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('course_id', course_id);
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('password', password);

    } catch (error) {
        console.log(error);
    }
}

export default (creds) => (authDispatch) => {
    const storeUserData = async (studData) => {
        await AsyncStorage.setItem("studName", studData.fullname);
        await AsyncStorage.setItem("studMob", studData.phone);
        await AsyncStorage.setItem("studEmail", studData.email);
    }
    authDispatch({
        type: LOGIN_LOADING,
    });
    login(creds).then((res) => {
        // console.log("0000000000000000000000000");
        // console.log(res);
        // console.warn("Login Data =>",res.data.data.data)

        if (res.status) {
            storeUserData(res.data.data.data)
            // set user in asyncronus storage
            rememberUser(res.data.data.token, creds.course_id, creds.email, creds.password).then(() => {
                authDispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data
                })

            }).catch(error => {
                authDispatch({
                    type: LOGIN_FAIL,
                    payload: e
                })

                Alert.alert(
                    "Please try again later",
                    "Something went wrong to login",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            })

        } else {
            authDispatch({
                type: LOGIN_FAIL,
                payload: res.errors
            })

            Alert.alert(
                "Invalid Credentials",
                "Please check your credentials",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        }

    }).catch((error) => {
        authDispatch({
            type: LOGIN_FAIL,
            pyload: error
        })

        console.log(error);

        Alert.alert(
            "Please try again later",
            "Something went wrong to login.",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }

            ]
        );
    })
}