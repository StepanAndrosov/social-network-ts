import style from './User.module.css'

type PropsType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }
    isFollow: (id: number) => void
    avatar: string
    alt: string
}

export const User = (props: PropsType) => {

    const toggleFollowUnfollow = () => {
        props.isFollow(props.id)
    }

    return (
        <div className={style.User}>
            <div className={style.avaBlock}>
                <div><h4 className={style.name}>{props.fullName}</h4></div>
               <div><img className={style.ava} src={props.avatar} alt={props.alt}/></div>
            </div>
            <span>my status: <span className={style.status}>{props.status}</span></span>
            <span className={style.city}>I`m from <b>{props.location.country}</b> from <b>{props.location.city}</b></span>
            <button className={props.followed ? style.btnUnFollow : style.btnFollow} onClick={toggleFollowUnfollow}>{props.followed ? 'unfollow' : 'follow'}</button>
        </div>
    )
}