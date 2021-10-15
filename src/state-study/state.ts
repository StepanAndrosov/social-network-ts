const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

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
}
export type DialogsPageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    subscribe: (callback: ()=>void) => void
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
            newPostText: "It is a crazy FLUX!"},
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
    },
    dispatch (action) {
        switch (action.type) {
            case ADD_POST:
                const newPost: PostType = {
                    id: 5,
                    message: action.postText,
                    likesCount: 0
                }
                this.getState().profilePage.postsData = [{...newPost}, ...store.getState().profilePage.postsData]
                this.getState().profilePage.newPostText = ''
                this._callSubscriber()
                break
            case UPDATE_NEW_POST_TEXT:
                this.getState().profilePage.newPostText = action.newText
                this._callSubscriber()
                break
        }
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
