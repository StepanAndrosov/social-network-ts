import {ActionsType} from "./redux-store";
import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkType} from "./types";
import {ProfilePhotosType, ProfileType, ResultCode} from "../api/types";

const ADD_POST = "profile/ADD-POST"
const SET_USER_PROFILE = "profile/SET_USER_PROFILE"
const SET_STATUS = "profile/SET_STATUS"
const DELETE_POST = "profile/DELETE-POST"
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS"
const SAVE_PROFILE_SUCCESS = "profile/SAVE_PROFILE_SUCCESS"

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    postsData: Array<PostType>
    newPostText: string
    profile: ProfileType,
    status: string | null
}

const initialState: ProfilePageType = {
    postsData: [
        {id: 1, message: 'Hi', likesCount: 35840},
        {id: 2, message: 'Yo', likesCount: 10560},
        {id: 3, message: 'My brother is Jake', likesCount: 3650},
        {id: 4, message: 'It`s my first post', likesCount: 1545}
    ],
    newPostText: "It is a crazy FLUX!",
    profile: {
        aboutMe: "",
        contacts: {
            facebook: "",
            website: "",
            vk: "",
            twitter: "",
            instagram: "",
            youtube: "",
            github: "",
            mainLink: "",
        },
        lookingForAJob: false,
        lookingForAJobDescription: "",
        fullName: "",
        userId: 0,
        photos: {
            small: "",
            large: ","
        }
    },
    status: "",
}
export type KeyofContactsType = keyof typeof initialState.profile.contacts

export const profileReducer = (state = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: Math.random() * 100,
                message: action.postText,
                likesCount: 0
            }
            return {
                ...state,
                postsData: [{...newPost}, ...state.postsData],
                newPostText: ''
            }
        case DELETE_POST:
            return {...state, postsData: state.postsData.filter(p => p.id !== action.id)}
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}}
        case SAVE_PROFILE_SUCCESS:
            return {...state, profile: action.profile}
        default:
            return state
    }
}
// actions
export const addPost = (postText: string) => ({type: ADD_POST, postText} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string | null) => ({type: SET_STATUS, status} as const)
export const deletePost = (id: number) => ({type: DELETE_POST, id} as const)
export const savePhotoSuccess = (photos: ProfilePhotosType) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
} as const)
export const saveProfileSuccess = (profile: ProfileType) => ({type: SAVE_PROFILE_SUCCESS, profile} as const)
//thunks
export const getStatusTC = (id: number | undefined): ThunkType => async (dispatch) => {
    const response = await profileAPI.getStatus(id)
    dispatch(setStatus(response))
}
export const updateStatusTC = (status: string | null): ThunkType => async (dispatch) => {
    const res = await profileAPI.updateStatus(status)
    if (res.resultCode === ResultCode.Success) {
        dispatch(setStatus(status))
    }
}
export const getUserProfile = (id: number | null): ThunkType => async (dispatch) => {
    const res = await profileAPI.getProfile(id)
    dispatch(setUserProfile(res))

}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    const res = await profileAPI.savePhoto(file)
    if (res.resultCode === ResultCode.Success) {
        dispatch(savePhotoSuccess(res.data))
    }
}
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const res = await profileAPI.saveProfile(profile)
    if (res.resultCode === ResultCode.Success) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit("edit-profile", {_error: res.messages[0]}))
        return Promise.reject(res.messages[0])
    }
}
