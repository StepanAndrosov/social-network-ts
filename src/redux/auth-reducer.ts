import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {FormAction} from "redux-form/lib/actions";

const SET_USER_DATA = "auth/SET_USER_DATA"

const initialState = {
    isAuth: false,
    userId: null as (number | null),
    email: null as (string | null),
    login: null as (string | null)
}

export type AuthType = typeof initialState

export const authReducer = (state = initialState, action: ActionsType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}
//actions
export const setUserData = (userId: null | number, email: null | string, login: null | string, isAuth: boolean) =>
    ({type: SET_USER_DATA, data: {userId, email, login}, isAuth} as const)

// thunks
export const getAuthUserDataTC = () => async (dispatch: Dispatch<ActionsType>) => {
    const response = await authAPI.authMe()
    if (response.resultCode === 0) {
        const {id, login, email} = response.data
        dispatch(setUserData(id, email, login, true))
    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch<ActionsType | FormAction>) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.resultCode === 0) {
        authAPI.authMe()
            .then(response => {
                if (response.resultCode === 0) {
                    const {id, login, email} = response.data
                    dispatch(setUserData(id, email, login, true))
                }
            })
    } else {
        const message = response.messages.length > 0 ? response.messages[0] : "Email or password is wrong"
        dispatch(stopSubmit("login", {_error: message}))
    }

}
export const logoutTC = () => async (dispatch: Dispatch<ActionsType>) => {
    const response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}
