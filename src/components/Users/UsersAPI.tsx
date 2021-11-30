import React, {Component} from "react";
import {UsersPropsType} from "./UsersContainer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

export class UsersAPI extends Component<UsersPropsType> {
    componentDidMount() {
        this.props.setIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                this.props.setIsFetching(false)
            })
    }
    onSetCurrentPage = (page: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(page)
        usersAPI.getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> :
                    <Users users={this.props.users}
                           totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           onSetCurrentPage={this.onSetCurrentPage}
                           follow={this.props.follow}
                           toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}
                           followingInProgress={this.props.followingInProgress}
                    />
                }
            </>
        )
    }
}