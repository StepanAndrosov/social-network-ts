import {ActionsType} from "./redux-store";
import {getAuthUserDataTC} from "./auth-reducer";

const INITIAL = "INITIAL"

const initialState = {
    initialized: false,
}

export type AuthType = typeof initialState

export const appReducer = (state = initialState, action: ActionsType): AuthType => {
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

export const setInitializedAC = () => {
    return {type: INITIAL} as const
}

export const initializeAppTC = () => (dispatch: any) => {
    const promise = dispatch(getAuthUserDataTC())
    Promise.all([promise])
        .then(() => {
            dispatch(setInitializedAC())
        })
}




