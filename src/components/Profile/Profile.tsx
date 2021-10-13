import style from "./Profile.module.scss"
import React from "react"
import {MyPosts} from "./MyPosts/MyPosts"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo"
import {ProfilePageType} from "../../state-study/state"

export const Profile: React.FC<ProfilePageType> = ({postsData, addPost, ...props}) => {
    return (
        <div className={style.Profile}>
            <ProfileInfo />
            <MyPosts postsData={postsData}
                     addPost={addPost}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}