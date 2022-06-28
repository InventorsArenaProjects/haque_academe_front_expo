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

const a = async () => {
    try {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('course_id');
        await AsyncStorage.removeItem('email');
        await AsyncStorage.removeItem('password');
        // await AsyncStorage.setItem('token', token);
        // await AsyncStorage.setItem('course_id', course_id);
        // await AsyncStorage.setItem('email', email);
        // await AsyncStorage.setItem('password', password);

    } catch (error) {
        console.log(error);
    }
}

export default (creds) => (authDispatch) => {
    authDispatch({
        type: LOGIN_LOADING,
    });
    login(creds).then((res) => {
        if (res.status) {
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
                "Please check your credentials45",
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