import {stopSubmit} from "redux-form";
import {ActionsType, ThunkType} from "./types";
import {CaptchaCode, ResultCode} from "../api/types";
import {authAPI} from "../api/authAPI";
import {securityAPI} from "../api/securityAPI";

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
        case 'auth/SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
            }
        case 'auth/GET_CAPTCHA_URL_SUCCESS':
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
    ({type: 'auth/SET_USER_DATA', data: {userId, email, login}, isAuth} as const)
export const getCaptchaUrlSuccess = (url: string) =>
    ({type: 'auth/GET_CAPTCHA_URL_SUCCESS', url} as const)

// thunks
export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const res = await authAPI.authMe()
    if (res.resultCode === ResultCode.Success) {
        const {id, login, email} = res.data
        dispatch(setUserData(id, email, login, true))
    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch) => {
    const res = await authAPI.login(email, password, rememberMe)
    if (res.resultCode === ResultCode.Success) {
        authAPI.authMe()
            .then(res => {
                const {id, login, email} = res.data
                dispatch(setUserData(id, email, login, true))
            })
    } else {
        if (res.resultCode === CaptchaCode.CaptchaIsRequired) {
            await dispatch(getCaptchaUrl())
        }
        const message = res.messages.length > 0 ? res.messages[0] : "Email or password is wrong"
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const logoutTC = (): ThunkType => async (dispatch) => {
    const res = await authAPI.logout()
    if (res.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const res = await securityAPI.getCaptchaUrl()
    dispatch(getCaptchaUrlSuccess(res.url))
}
