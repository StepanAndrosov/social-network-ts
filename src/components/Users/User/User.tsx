import style from './User.module.css'
import Morty from "./../../../accets/images/Morty_Smith.jpg"
import {NavLink} from "react-router-dom"
import {usersAPI} from "../../../api/api";

type PropsType = {
    id: number
    followed: boolean
    name: string
    status: string
    location: { city: string, country: string }
    isFollow: (id: number) => void
    photo: any
    alt: string
}

export const User = (props: PropsType) => {

    const toggleFollowUnfollow = () => {
        if (!props.followed) {
            usersAPI.follow(props.id)
                .then(data => {
                    if (data.resultCode === 0) {
                        props.isFollow(props.id)
                    }
                })
        }
        if (props.followed) {
            usersAPI.unFollow(props.id)
                .then(data => {
                    if (data.resultCode === 0) {
                        props.isFollow(props.id)
                    }
                })
        }
    }

    return (
        <div className={style.User}>
            <NavLink to={'/profile/' + props.id}>
                <div className={style.avaBlock}>
                    <div><h4 className={style.name}>{props.name}</h4></div>
                    <div><img className={style.ava} src={props.photo != null ? props.photo : Morty}
                              alt={"defaultAvatar"}/>
                    </div>
                </div>
            </NavLink>
            <span>my status: <span className={style.status}>{props.status}</span></span>
            <button
                className={props.followed ?
                    style.btnUnFollow : style.btnFollow}
                onClick={toggleFollowUnfollow}>
                {props.followed ? 'unfollow' : 'follow'}</button>
        </div>
    )
}