import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

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
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const addPost = (postText: string) => {
    return {
        type: ADD_POST,
        postText
    } as const
}
export const updateNewPostText = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
export const setStatus = (status: string | null) => {
    return {
        type: SET_STATUS,
        status
    } as const
}
export const getStatusTC = (id: string | undefined) => (dispatch: Dispatch<ActionsType>) => {
    profileAPI.getStatus(id).then(response => {
        dispatch(setStatus(response))
    })
}

export const updateStatusTC = (status: string | null) => (dispatch: Dispatch<ActionsType>) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}
export const setUserProfileTC = (id: string | undefined) => (dispatch: Dispatch<ActionsType>) => {
    usersAPI.getProfile(id)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}
