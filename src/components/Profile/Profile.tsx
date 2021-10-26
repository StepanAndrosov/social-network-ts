import style from "./Profile.module.scss"
import React from "react"
import {MyPosts} from "./MyPosts/MyPosts"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo"
import {ActionsType} from "../../store-study/store"
import {PostType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    postsData: Array<PostType>
    dispatch: (action: ActionsType) => void
    newPostText: string
}

export const Profile: React.FC<ProfilePropsType> = ({postsData, ...props}) => {
    return (
        <div className={style.Profile}>
            <ProfileInfo />
            <MyPosts postsData={postsData}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}