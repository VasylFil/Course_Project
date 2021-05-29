import {CLEAR_FIELDS, LOGIN, LOGOUT, REGISTER, SET_FAV, SET_LOGIN, SET_REGISTER} from "./actions";

export function login(){
    return {
        type: LOGIN
    }
}
export function logout(){
    return {
        type: LOGOUT
    }
}
export function register(value){
    return {
        type: REGISTER,
        payload: value
    }
}
export function set_login(value){
    return {
        type: SET_LOGIN,
        payload: value
    }
}
export function set_register(value){
    return {
        type: SET_REGISTER,
        payload: value
    }
}
export function clear_fields(value){
    return {
        type: CLEAR_FIELDS,
        payload: value
    }
}
export function set_fav(value){
    return {
        type: SET_FAV,
        payload: value
    }
}