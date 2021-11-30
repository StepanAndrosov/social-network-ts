import {User} from "./User/User";
import style from "./Users.module.css"
import React from "react";
import {UserType} from "../../redux/users-reducer";

type UsersFCType = {
    users: Array<UserType>
    currentPage: number
    onSetCurrentPage: (page: number) => void
    follow: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    toggleIsFollowingInProgress: (userId: number, isFetching: boolean) => void
    followingInProgress: [] | Array<number>
}

export const Users: React.FC<UsersFCType> = (props) => {
    const pagesCount = (props.totalUsersCount / props.pageSize) <= 20 ? Math.ceil(props.totalUsersCount / props.pageSize) : 21
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className={style.header}><h3>UsersList:</h3></div>
            <div>
                {pages.map(p => <span key={p}
                                            className={p === props.currentPage ? `${style.selectedPage} ${style.pagesSpan}` : style.pagesSpan}
                                            onClick={() => props.onSetCurrentPage(p)}
                    >
                            {p}
                    </span>
                )}
            </div>
            <div className={style.Users}>
                {props.users.map(item => {
                    return (
                        <User key={item.id}
                              id={item.id}
                              followed={item.followed}
                              name={item.name}
                              status={item.status}
                              location={item.location}
                              isFollow={props.follow}
                              isFollowingProgress={props.toggleIsFollowingInProgress}
                              followingInProgress={props.followingInProgress}
                              photo={item.photos.small}
                              alt={item.alt}
                        />)
                })}
            </div>
        </div>
    )
}