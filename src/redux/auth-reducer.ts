import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"

export type AuthType = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth: boolean
}
const initialState: AuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: ActionsType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setUserData = (userId: null | string, email: null | string, login: null | string) => {
    return {type: SET_USER_DATA, data: {userId, email, login}} as const
}

export const setUserDataTC = () => (dispatch: Dispatch<ActionsType>) => {
    authAPI.authMe()
        .then(response => {
            if (response.resultCode === 0) {
                const {id, login, email} = response.data
                dispatch(setUserData(id, email, login))
            }
        })
}