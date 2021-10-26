import {ActionsType} from "../store-study/store";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    postsData: Array<PostType>
    newPostText: string
}

const initialState: ProfilePageType = {
    postsData: [
        {id: 1, message: 'Hi', likesCount: 35840},
        {id: 2, message: 'Yo', likesCount: 10560},
        {id: 3, message: 'My brother is Jake', likesCount: 3650},
        {id: 4, message: 'It`s my first post', likesCount: 1545}
    ],
        newPostText: "It is a crazy FLUX!"
}

export const profileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: Math.random() * 100,
                message: action.postText,
                likesCount: 0
            }
            state.postsData = [{...newPost}, ...state.postsData]
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostAC = (postText: string) => {
    return {
        type: ADD_POST,
        postText: postText
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}