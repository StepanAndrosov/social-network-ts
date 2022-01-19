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
                isAuth: action.isAuth
            }
        default:
            return state
    }
}

export const setUserData = (userId: null | string, email: null | string, login: null | string, isAuth: boolean) => {
    return {type: SET_USER_DATA, data: {userId, email, login}, isAuth} as const
}

export const setUserDataTC = () => (dispatch: Dispatch<ActionsType>) => {
    authAPI.authMe()
        .then(response => {
            if (response.resultCode === 0) {
                const {id, login, email} = response.data
                dispatch(setUserData(id, email, login, true))
            }
        })
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<ActionsType>) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.resultCode === 0) {
                authAPI.authMe()
                    .then(response => {
                        if (response.resultCode === 0) {
                            const {id, login, email} = response.data
                            dispatch(setUserData(id, email, login, true))
                        }
                    })
            }
        })
}
export const logoutTC = () => (dispatch: Dispatch<ActionsType>) => {
    authAPI.logout()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
}
