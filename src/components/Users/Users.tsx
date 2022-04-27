import {User} from "./User/User";
import style from "./Users.module.css"
import React from "react";
import {UserType} from "../../redux/users/users-reducer";
import {Paginator} from "./Paginator/Paginator";

type UsersPropsType = {
    users: Array<UserType>
    currentPage: number
    onSetCurrentPage: (page: number) => void
    pageSize: number
    totalUsersCount: number
    followingInProgress: [] | Array<number>
    followUnfollowTC: (followed: boolean, id: number) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {
    return (
        <div>
            <h3 className={style.header}>UsersList:</h3>
            <Paginator
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onSetCurrentPage={props.onSetCurrentPage}
                totalItemsCount={props.totalUsersCount}
            />
            <div className={style.Users}>
                {
                    props.users.map(item => {
                        return (
                            <User key={item.id}
                                  id={item.id}
                                  followed={item.followed}
                                  name={item.name}
                                  status={item.status}
                                  followingInProgress={props.followingInProgress}
                                  photo={item.photos.small}
                                  followUnfollowTC={props.followUnfollowTC}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
