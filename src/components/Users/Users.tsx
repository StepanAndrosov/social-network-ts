import {User} from "./User/User";
import style from "./Users.module.css"

import {UsersPropsType} from "./UsersContainer";


export const Users = (props: UsersPropsType) => {

    return (
        <div>
            <div className={style.header}><h3>UsersList:</h3></div>
            <div className={style.Users}>
                {props.users.map(item => {

                    return (
                        <User key={item.id}
                              id={item.id}
                              followed={item.followed}
                              fullName={item.fullName}
                              status={item.status}
                              location={item.location}
                              isFollow={props.follow}
                              avatar={item.userPhoto}
                              alt={item.alt}
                        />)
                })}
            </div>
        </div>
    )
}