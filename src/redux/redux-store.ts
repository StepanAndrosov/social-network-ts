import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk"
import {profileReducer, addPost, setUserProfile, setStatus, deletePost} from "./profile-reducer";
import {dialogsReducer, sendMessage} from "./dialogs-reducer";
import {reducer as formReducer} from 'redux-form'
import {
    usersReducer,
    follow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching, toggleIsFollowingInProgress,
} from "./users/users-reducer";
import {authReducer, setUserData} from "./auth-reducer";
import {appReducer, setInitializedAC} from "./app-reducer";

export type ActionsType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof deletePost>
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
    | ReturnType<typeof setInitializedAC>

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


// @ts-ignore
window.store = store
