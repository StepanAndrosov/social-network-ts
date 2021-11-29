import style from './User.module.css'
import Morty from "./../../../accets/images/Morty_Smith.jpg"
import {NavLink} from "react-router-dom"
import axios from "axios";

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
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
                withCredentials: true,
                headers: {
                    "API-KEY": "ac5021a6-6592-4dfc-bd91-07a05b477711"
                }
            })
                .then(response => {
                    if (response.data.resultCode === 0) {
                        props.isFollow(props.id)
                    }
                })
        }
        if (props.followed) {
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,  {
                withCredentials: true,
                headers: {
                    "API-KEY": "ac5021a6-6592-4dfc-bd91-07a05b477711"
                }
            })
                .then(response => {
                    if (response.data.resultCode === 0) {
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