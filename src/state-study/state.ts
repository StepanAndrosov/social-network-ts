
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
    newPostText: string
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
}
export type DialogsPageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    subscribe: (callback: ()=>void) => void
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
            newPostText: "It is a crazy FLUX!",
            addPost (postText: string) {
                const newPost: PostType = {
                    id: 5,
                    message: postText,
                    likesCount: 0
                }
                store.getState().profilePage.postsData.push(newPost)
                store.getState().profilePage.newPostText = ''
                store._callSubscriber()
            },
            updateNewPostText (newText: string) {
                store.getState().profilePage.newPostText = newText
                store._callSubscriber()
            }
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
            ]
        },
    },
    getState() {return this._state},
    _callSubscriber(){
        console.log("State changed")
    },
    subscribe(callback){
        this._callSubscriber = callback
    }
}


