import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGOUT, LOGIN_LOADING } from '../../constants/actionTypes'

export default () => (authDispatch) => {
    authDispatch({
        type: LOGIN_LOADING,
    })
    AsyncStorage.getAllKeys()
    .then(keys => AsyncStorage.multiRemove(keys))
    .then(() => console.log("logged out")).then(()=>{
        authDispatch({
            type: LOGOUT,
        })

    });
}