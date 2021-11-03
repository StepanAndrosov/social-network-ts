import {User} from "./User/User";
import style from "./Users.module.css"
import axios from "axios"

import {UsersPropsType} from "./UsersContainer";


export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })

    }

    return (
        <div>
            <div className={style.header}><h3>UsersList:</h3></div>
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
                              photo={item.photos.small}
                              alt={item.alt}
                        />)
                })}
            </div>
        </div>
    )
}