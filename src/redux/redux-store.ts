import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk"
import {profileReducer, addPost, updateNewPostText, setUserProfile, setStatus} from "./profile-reducer";
import {dialogsReducer, sendMessage, updateNewMessageBody} from "./dialogs-reducer";
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
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof updateNewMessageBody>
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
    auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


// @ts-ignore
window.store = store
