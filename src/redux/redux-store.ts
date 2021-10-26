import {combineReducers, createStore} from "redux";
import {ProfilePageType, profileReducer} from "./profile-reducer";
import {DialogsPageType, dialogsReducer} from "./dialogs-reducer";

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

const reducers = combineReducers({
    profileReducer,
    dialogsReducer
})

export const store = createStore(reducers)