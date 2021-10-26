import {ActionsType} from "../store-study/store-study";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type DialogsPageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    newMessageBody: string
}

const initialState: DialogsPageType = {
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
}

export const dialogsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            const newMessage: MessageType = {
                id: Math.random() * 100,
                message: state.newMessageBody
            }
            state.messagesData = [...state.messagesData, {...newMessage}]
            state.newMessageBody = ''
            return state
        default:
            return state
    }
}

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}
export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    } as const
}