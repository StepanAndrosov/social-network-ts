import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

const ADD_POST = "profile/ADD-POST"
const SET_USER_PROFILE = "profile/SET_USER_PROFILE"
const SET_STATUS = "profile/SET_STATUS"
const DELETE_POST = "profile/DELETE-POST"
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS"

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    postsData: Array<PostType>
    newPostText: string
    profile: {
        aboutMe: null | string
        contacts: {
            facebook: null | string
            website: null | string
            vk: null | string
            twitter: null | string
            instagram: null | string
            youtube: null | string
            github: null | string
            mainLink: null | string
        },
        lookingForAJob: boolean
        lookingForAJobDescription: null | string
        fullName: string
        userId: number
        photos: {
            small: string
            large: string
        }
    },
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
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null,
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: "",
        userId: 0,
        photos: {
            small: "",
            large: ","
        }
    },
    status: "",
}

export type ProfileType = typeof initialState.profile

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
            return {...state, profile: {...state.profile, photos: action.photos} }
        default:
            return state
    }
}
// actions
export const addPost = (postText: string) => ({type: ADD_POST, postText} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string | null) => ({type: SET_STATUS, status} as const)
export const deletePost = (id: number) => ({type: DELETE_POST, id} as const)
export const savePhotoSuccess = (photos: {small: string, large: string}) => ({type: SAVE_PHOTO_SUCCESS, photos} as const)
//thunks
export const getStatusTC = (id: number | undefined) => async (dispatch: Dispatch<ActionsType>) => {
    const response = await profileAPI.getStatus(id)
    dispatch(setStatus(response))
}
export const updateStatusTC = (status: string | null) => async (dispatch: Dispatch<ActionsType>) => {
    const response = await profileAPI.updateStatus(status)
    if (response.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const setUserProfileTC = (id: number | undefined) => async (dispatch: Dispatch<ActionsType>) => {
    const data = await profileAPI.getProfile(id)
    dispatch(setUserProfile(data))
}
export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
    const res = await profileAPI.savePhoto(file)

    if (res.data.resultCode === 0 ) {
        dispatch(savePhotoSuccess(res.data.data))
    }
}
