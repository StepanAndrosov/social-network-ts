
type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    postsData: Array<PostType>
}
export type DialogsPageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export const state: StateType = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi', likesCount: 35840},
            {id: 2, message: 'Yo', likesCount: 10560},
            {id: 3, message: 'My brother is Jake', likesCount: 3650},
            {id: 4, message: 'It`s my first post', likesCount: 1545}
        ]
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
            {id: 4, message: 'Morty are jerk!'}
        ]
    }
}

