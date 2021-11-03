import {ActionsType} from "./redux-store";
import candymanLogo from "./../accets/images/default-users/candy.jpg"
import werewolfLogo from "./../accets/images/default-users/werewolf.jpg"
import draculaLogo from "./../accets/images/default-users/dracula-halloween-icon.jpg"
import mummyLogo from "./../accets/images/default-users/mummy.jpg"

const FOLLOW = 'FOLLOW'
//const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export type UserType = {
    photos: any;
    id: number
    followed: boolean
    name: string
    status: string
    location: {city: string, country: string}
    userPhoto: string
    alt: string
}

const initialState = {
    users: [
        {id: 1, followed: true, name: "Candyman", status: "I have a big hook", location: {city: "NewYork", country: "USA"}, photos: {small:candymanLogo, large:null}, alt: 'candyman logo'},
        {id: 2, followed: true, name: "Werewolf", status: "I love sheeps", location: {city: "Paris", country: "France"}, photos: {small:werewolfLogo, large:null}, alt: 'werewolf logo'},
        {id: 3, followed: true, name: "Dracula", status: "I love red whine", location: {city: "Bucharest", country: "Romania"}, photos: {small:draculaLogo, large:null}, alt: 'dracula logo'},
        {id: 4, followed: true, name: "Mummy", status: "Wooo-ooo", location: {city: "Sakkara", country: "Egypt"}, photos: {small:mummyLogo, large:null}, alt: 'mummy logo'}
    ] as Array<UserType>
}

export type InitialStateType = typeof initialState

export const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}
// export const unfollowAC = (userId: number) => {
//     return {
//         type: UNFOLLOW,
//         userId
//     } as const
// }
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}