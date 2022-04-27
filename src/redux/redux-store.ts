import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk"
import {
    profileReducer,
    addPost,
    setUserProfile,
    setStatus,
    deletePost,
    savePhotoSuccess,
    saveProfileSuccess
} from "./profile-reducer";
import {dialogsReducer, sendMessage} from "./dialogs-reducer";
import {reducer as formReducer} from 'redux-form'
import {
    usersReducer,
    isFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching, toggleIsFollowingInProgress,
} from "./users/users-reducer";
import {authReducer, getCaptchaUrlSuccess, setUserData} from "./auth-reducer";
import {appReducer, setInitialized} from "./app-reducer";

export type ActionsType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof savePhotoSuccess>
    | ReturnType<typeof saveProfileSuccess>
    | ReturnType<typeof sendMessage>
    | ReturnType<typeof isFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof toggleIsFollowingInProgress>
    | ReturnType<typeof setUserData>
    | ReturnType<typeof getCaptchaUrlSuccess>
    | ReturnType<typeof setInitialized>

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
// @ts-ignore
window._store_ = store
