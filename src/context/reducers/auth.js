import {LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from '../../constants/actionTypes'

const auth = (state, {type, payload}) =>{
    switch (type) {
        case LOGIN_LOADING:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                isLoggedIn: true,
                remembered: true,
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                isLoggedIn: false,
                remembered: false,
                errors: payload
            }
        case LOGOUT:
            return {
                ...state,
                loading: false,
                isLoggedIn: false,
                remembered: false,
            }
        default:
            return state
    }
}

export default auth;