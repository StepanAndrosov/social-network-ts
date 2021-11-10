import {User} from "./User/User";
import style from "./Users.module.css"
import axios from "axios"
import {UsersPropsType} from "./UsersContainer";
import {Component} from "react";

export class Users extends Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onSetCurrentPage = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        const pagesCount = (this.props.totalUsersCount / this.props.pageSize) <= 20 ? Math.ceil(this.props.totalUsersCount / this.props.pageSize) : 21

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (

            <div>
                <div className={style.header}><h3>UsersList:</h3></div>
                <div>
                    {pages.map(p => <span key={p}
                                          className={p === this.props.currentPage ? style.selectedPage : ''}
                                          onClick={()=> this.onSetCurrentPage(p)}
                        >{p}
                    </span>
                    )}
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