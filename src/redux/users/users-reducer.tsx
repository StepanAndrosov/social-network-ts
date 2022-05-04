import {ActionsType, ThunkType} from "../types";
import {UserType} from "../../api/types";
import {usersAPI} from "../../api/usersAPI";

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
}
export type InitialStateType = typeof initialState

export const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'IS_FOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)
            }
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        case 'IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}
// actions
export const isFollow = (userId: number) =>
    ({type: 'IS_FOLLOW', userId} as const)
export const setUsers = (users: Array<UserType>) =>
    ({type: 'SET_USERS', users} as const)
export const setCurrentPage = (currentPage: number) =>
    ({type: 'SET_CURRENT_PAGE', currentPage} as const)
export const setTotalUsersCount = (usersCount: number) =>
    ({type: 'SET_TOTAL_USERS_COUNT', usersCount} as const)
export const setIsFetching = (isFetching: boolean) =>
    ({type: 'IS_FETCHING', isFetching} as const)
export const toggleIsFollowingInProgress = (userId: number, isFetching: boolean) =>
    ({type: 'TOGGLE_IS_FOLLOWING_PROGRESS', userId, isFetching} as const)
// thunks
export const getUsersTC = (currentPage: number, pageSize: number): ThunkType =>
    async (dispatch) => {
        dispatch(setIsFetching(true))
        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(setIsFetching(false))
    }
export const followUnfollow = (followed: boolean, id: number): ThunkType =>
    async (dispatch) => {
        dispatch(toggleIsFollowingInProgress(id, true))
        const data = followed ? await usersAPI.unFollow(id) : await usersAPI.follow(id)
        if (data.resultCode === 0) {
            dispatch(isFollow(id))
            dispatch(toggleIsFollowingInProgress(id, false))
        }
    }

