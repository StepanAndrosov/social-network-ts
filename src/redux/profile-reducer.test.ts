import {addPost, deletePost, profileReducer} from "./profile-reducer";

const state = {
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
it('new post should be added', () => {
    const postText = "Kawabanga!"
    const action = addPost(postText)
    const newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(5)
    expect(newState.postsData[0].message).toBe(postText)
    expect(state.postsData.length).toBe(4)
})

it('after deleting posts should  be increase', () => {
    const id = 1
    const action = deletePost(id)
    const newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(3)
    expect(newState.postsData[0].id).toBe(2)
    expect(state.postsData[0].id).toBe(1)
})
