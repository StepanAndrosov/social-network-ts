import style from './User.module.css'
import Morty from "./../../../accets/images/Morty_Smith.jpg"
import {NavLink} from "react-router-dom"

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
        props.isFollow(props.id)
    }

    return (
        <div className={style.User}>
            <NavLink to={'/profile/' + props.id}>
                <div className={style.avaBlock}>
                    <div><h4 className={style.name}>{props.name}</h4></div>
                    <div><img className={style.ava} src={props.photo != null ? props.photo : Morty} alt={"avatar"}/>
                    </div>
                </div>
            </NavLink>
            <span>my status: <span className={style.status}>{props.status}</span></span>
            {/*<span className={style.city}>I`m from <b>{props.location.country}</b> from <b>{props.location.city}</b></span>*/}
            <button className={props.followed ? style.btnUnFollow : style.btnFollow}
                    onClick={toggleFollowUnfollow}>{props.followed ? 'unfollow' : 'follow'}</button>
        </div>
    )
}