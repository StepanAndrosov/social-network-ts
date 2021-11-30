import {UsersAPI} from "./UsersAPI";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers, toggleIsFollowingInProgress,
    UserType
} from "../../redux/users-reducer";

import {AppStateType} from "../../redux/redux-store";

type MapDispatchType = {
    follow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (usersCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    toggleIsFollowingInProgress: (userId: number, isFetching: boolean) => void
}
type MapStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: [] | Array<number>
}

export type UsersPropsType = MapDispatchType & MapStateType

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export const UsersContainer = connect(mapStateToProps, {
    follow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    setIsFetching,
    toggleIsFollowingInProgress
})(UsersAPI)