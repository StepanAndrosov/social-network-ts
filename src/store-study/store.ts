import {addPostAC, profileReducer, updateNewPostTextAC} from "../redux/profile-reducer";
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from "../redux/dialogs-reducer";

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
type PostType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    postsData: Array<PostType>
    newPostText: string
}
type DialogsPageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    newMessageBody: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionsType) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi', likesCount: 35840},
                {id: 2, message: 'Yo', likesCount: 10560},
                {id: 3, message: 'My brother is Jake', likesCount: 3650},
                {id: 4, message: 'It`s my first post', likesCount: 1545}
            ],
            newPostText: "It is a crazy FLUX!"
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Rick'},
                {id: 2, name: 'Morty'},
                {id: 3, name: 'Баклажан'},
                {id: 4, name: 'Пельмень'}
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'I`m cucumber'},
                {id: 3, message: 'Where is my portal gun?'},
                {id: 4, message: 'Morty is jerk!'}
            ],
            newMessageBody: ""
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log("State changed")
    },
    subscribe(callback) {
        this._callSubscriber = callback
    },
    dispatch(action) {
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()
    }
}




