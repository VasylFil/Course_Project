import {initialState} from "../initialState";
import {CLEAR_FIELDS, LOGIN, LOGOUT, REGISTER, SET_LOGIN, SET_REGISTER, SET_FAV} from "../actions/actions";

function rootReducer(state = initialState, action){
    const newState = state => JSON.parse(JSON.stringify(state))

    switch (action.type){
        case LOGIN:
            state.isLoggedIn = true
            return newState(state)

        case LOGOUT:
            state.isLoggedIn = false
            return newState(state)

        case REGISTER:
            const [firstName, lastName, email, pass] = action.payload
            const newUser = {
                id: state.users.length + 1,
                firstName,
                lastName,
                email,
                pass,
            }
            state.users.push(newUser)
            return newState(state)

        case SET_LOGIN:
            let {id, data} = action.payload
            state.form.login[id] = data
            return newState(state)

        case SET_REGISTER:
            return newState(state)

        case CLEAR_FIELDS:
            state.form[action.payload].forEach(
                item => {
                    item.value = ''
                    item.valid = false
                    item.changed = false
                }
            )
            return newState(state)

        case SET_FAV:
            state.markets[action.payload].fav = !state.markets[action.payload].fav
            return newState(state)

        default:
            return newState(state)
    }
}


export default rootReducer