import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";


const reducers = combineReducers({
    profileReducer,
    dialogsReducer
})

export const store = createStore(reducers)