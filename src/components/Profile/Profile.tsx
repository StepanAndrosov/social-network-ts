import style from "./Profile.module.scss"
import React from "react"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo"
import {ActionsType} from "../../store-study/store-study"
import {PostType} from "../../redux/profile-reducer";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    postsData: Array<PostType>
    dispatch: (action: ActionsType) => void
    newPostText: string
}

export const Profile: React.FC<ProfilePropsType> = ({postsData, ...props}) => {
    return (
        <div className={style.Profile}>
            <ProfileInfo />
            <MyPostsContainer postsData={postsData}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}