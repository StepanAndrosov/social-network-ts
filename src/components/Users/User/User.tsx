import style from './User.module.css'
import Morty from "./../../../accets/images/Morty_Smith.jpg"
import {NavLink} from "react-router-dom"

type PropsType = {
    id: number
    followed: boolean
    name: string
    status: string | null
    photo: string
    followingInProgress: [] | Array<number>
    followUnfollowTC: (followed: boolean, id: number) => void
}

export const User = (props: PropsType) => {

    const toggleFollowUnfollow = () => {
        props.followUnfollowTC(props.followed, props.id)
    }

    return (
        <div className={style.User}>
            <NavLink to={'/profile/' + props.id}>
                <div className={style.avaBlock}>
                    <div>
                        <h4 className={style.name}>{props.name}</h4>
                    </div>
                    <div>
                        <img
                            className={style.ava}
                            src={props.photo != null ? props.photo : Morty}
                            alt={"defaultAvatar"}/>
                    </div>
                </div>
            </NavLink>
            <span>
                my status:
                <span className={style.status}>{props.status}</span>
            </span>
            <button
                disabled={props.followingInProgress.some(id => id === props.id)}
                className={props.followed ? style.btnUnFollow : style.btnFollow}
                onClick={toggleFollowUnfollow}
            >
                {props.followed ? 'unfollow' : 'follow'}
            </button>
        </div>
    )
}
