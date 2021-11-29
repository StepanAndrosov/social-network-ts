import {combineReducers, createStore} from "redux";
import {profileReducer, addPost, updateNewPostText, setUserProfile} from "./profile-reducer";
import {dialogsReducer, sendMessage, updateNewMessageBody} from "./dialogs-reducer";
import {
    usersReducer,
    follow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
} from "./users-reducer";
import {authReducer, setUserData} from "./auth-reducer";

export type ActionsType = ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof updateNewMessageBody>
    | ReturnType<typeof sendMessage>
    | ReturnType<typeof follow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof setUserData>

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export const store = createStore(rootReducer)


// @ts-ignore
window.store = store