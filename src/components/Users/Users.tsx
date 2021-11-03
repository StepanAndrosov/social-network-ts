import {User} from "./User/User";
import style from "./Users.module.css"
import axios from "axios"
import {UsersPropsType} from "./UsersContainer";
import {Component} from "react";

export class Users extends Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                <div className={style.header}><h3>UsersList:</h3></div>
                <div>
                    <button>Get Users</button>
                </div>
                <div className={style.Users}>
                    {this.props.users.map(item => {
                        return (
                            <User key={item.id}
                                  id={item.id}
                                  followed={item.followed}
                                  name={item.name}
                                  status={item.status}
                                  location={item.location}
                                  isFollow={this.props.follow}
                                  photo={item.photos.small}
                                  alt={item.alt}
                            />)
                    })}
                </div>
            </div>
        )
    }
}