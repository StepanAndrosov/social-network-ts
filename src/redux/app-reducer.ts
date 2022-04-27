import {ActionsType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";
import {ThunkType} from "./types";

const INITIAL = "app/INITIAL"

const initialState = {
    initialized: false,
}

export type AppReducerType = typeof initialState

export const appReducer = (state = initialState, action: ActionsType): AppReducerType => {
    switch (action.type) {
        case INITIAL:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const setInitialized = () => {
    return {type: INITIAL} as const
}

export const initializeApp = (): ThunkType => async (dispatch) => {
    const promise = await dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialized())
        })
}





