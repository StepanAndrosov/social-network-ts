import style from "./Profile.module.scss"
import React from "react"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo"
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export const Profile: React.FC = () => {
    return (
        <div className={style.Profile}>
            <ProfileInfo />
            <MyPostsContainer  />
        </div>
    )
}