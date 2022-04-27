import {connect} from "react-redux";
import {
    followUnfollow, getUsersTC,
    setCurrentPage, setIsFetching,
    setTotalUsersCount, setUsers,
    UserType
} from "../../redux/users/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import React, {Component} from "react";
import {
    currentPage, followingInProgress,
    getUsers, isFetching,
    pageSize, totalUsersCount
} from "../../redux/users/users-selector";

type MapDispatchType = {
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (usersCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    followUnfollowTC: (followed: boolean, id: number) => void
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

class UsersContainer extends Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onSetCurrentPage = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.getUsersTC(page, this.props.pageSize)
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching ? <Preloader/> : null
                }
                <Users users={this.props.users}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onSetCurrentPage={this.onSetCurrentPage}
                       followingInProgress={this.props.followingInProgress}
                       followUnfollowTC={this.props.followUnfollowTC}
                />
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        users: getUsers(state),
        pageSize: pageSize(state),
        totalUsersCount: totalUsersCount(state),
        currentPage: currentPage(state),
        isFetching: isFetching(state),
        followingInProgress: followingInProgress(state)
    }
}

export default connect(mapStateToProps, {
    setUsers, setTotalUsersCount,
    setCurrentPage, setIsFetching,
    getUsersTC, followUnfollowTC: followUnfollow
})(UsersContainer)
