import {ThunkAction} from "redux-thunk";
import {ActionsType, AppStateType} from "./redux-store";

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export type {
    ThunkType
}
