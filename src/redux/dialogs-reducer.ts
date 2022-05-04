import {ActionsType} from "./types";


const initialState = {
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
}
type DialogsPageType = typeof initialState

export const dialogsReducer = (state = initialState, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case 'dialog/SEND_MESSAGE':
            const newMessage = {
                id: Math.random() * 100,
                message: action.newMessageBody
            }
            return {
                ...state,
                messagesData: [...state.messagesData, {...newMessage}]
            }
        default:
            return state
    }
}
export const sendMessage = (newMessageBody: string) =>
    ({type: 'dialog/SEND_MESSAGE', newMessageBody} as const)
