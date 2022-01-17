import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk"
import {profileReducer, addPost, setUserProfile, setStatus} from "./profile-reducer";
import {dialogsReducer, sendMessage} from "./dialogs-reducer";
import { reducer as formReducer } from 'redux-form'
import {
    usersReducer,
    follow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching, toggleIsFollowingInProgress,
} from "./users-reducer";
import {authReducer, setUserData} from "./auth-reducer";

export type ActionsType = ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof sendMessage>
    | ReturnType<typeof follow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof toggleIsFollowingInProgress>
    | ReturnType<typeof setUserData>

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


// @ts-ignore
window.store = store
