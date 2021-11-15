import {UsersAPI} from "./UsersAPI";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    UserType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {ActionsType, AppStateType} from "../../redux/redux-store";

type MapDispatchType = {
    follow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (usersCount: number) => void
    setIsFetching: (isFetching: boolean) => void
}
type MapStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type UsersPropsType = MapDispatchType & MapStateType

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionsType>): MapDispatchType => {
    return {
        follow: (id: number) => dispatch(followAC(id)),
        setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users)),
        setTotalUsersCount: (usersCount: number) => dispatch(setTotalUsersCountAC(usersCount)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
        setIsFetching: (isFetching: boolean) => dispatch(setIsFetchingAC(isFetching))
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)