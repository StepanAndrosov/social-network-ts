import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {addPost, deletePost, savePhotoSuccess, saveProfileSuccess, setStatus, setUserProfile} from "./profile-reducer";
import {sendMessage} from "./dialogs-reducer";
import {
    isFollow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    toggleIsFollowingInProgress
} from "./users/users-reducer";
import {getCaptchaUrlSuccess, setUserData} from "./auth-reducer";
import {setInitialized} from "./app-reducer";

type ActionsType =
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

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export type {
    ThunkType,
    ActionsType
}
