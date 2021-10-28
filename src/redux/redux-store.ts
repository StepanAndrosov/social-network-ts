import {combineReducers, createStore} from "redux";
import {ProfilePageType, profileReducer} from "./profile-reducer";
import {DialogsPageType, dialogsReducer} from "./dialogs-reducer";
import {ActionsType} from "../store-study/store-study";

export type StateType = {
    profileReducer: ProfilePageType
    dialogsReducer: DialogsPageType
}
export type StoreType = {
    dispatch: (action: ActionsType) => void
    getState: () => StateType
}

const reducers = combineReducers({
    profileReducer,
    dialogsReducer
})

export const store = createStore(reducers)