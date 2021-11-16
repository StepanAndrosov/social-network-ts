import {ActionsType} from "./redux-store";

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

export const dialogsReducer = (state = initialState, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            const newMessage: MessageType = {
                id: Math.random() * 100,
                message: state.newMessageBody
            }
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {...newMessage}]
            }
        default:
            return state
    }
}

export const updateNewMessageBody = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}
export const sendMessage = () => {
    return {
        type: SEND_MESSAGE
    } as const
}