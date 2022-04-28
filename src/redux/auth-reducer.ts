import {ActionsType} from "./redux-store";
import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkType} from "./types";
import {CaptchaCode, ResultCode} from "../api/types";

const SET_USER_DATA = "auth/SET_USER_DATA"
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS"

const initialState = {
    isAuth: false,
    userId: null as (number | null),
    email: null as (string | null),
    login: null as (string | null),
    captchaUrl: null as (string | null)
}

export type AuthReducerType = typeof initialState

export const authReducer = (state = initialState, action: ActionsType): AuthReducerType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.url
            }
        default:
            return state
    }
}
//actions
export const setUserData = (userId: null | number, email: null | string, login: null | string, isAuth: boolean) =>
    ({type: SET_USER_DATA, data: {userId, email, login}, isAuth} as const)
export const getCaptchaUrlSuccess = (url: string) =>
    ({type: GET_CAPTCHA_URL_SUCCESS, url} as const)

// thunks
export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const response = await authAPI.authMe()
    if (response.resultCode === ResultCode.Success) {
        const {id, login, email} = response.data
        dispatch(setUserData(id, email, login, true))
    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.resultCode === ResultCode.Success) {
        authAPI.authMe()
            .then(response => {
                const {id, login, email} = response.data
                dispatch(setUserData(id, email, login, true))
            })
    } else {
        if (response.resultCode === CaptchaCode.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        const message = response.messages.length > 0 ? response.messages[0] : "Email or password is wrong"
        dispatch(stopSubmit("login", {_error: message}))
    }

}
export const logoutTC = (): ThunkType => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    debugger
    dispatch(getCaptchaUrlSuccess(response.url))
}
