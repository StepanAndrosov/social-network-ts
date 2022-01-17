import style from "./Profile.module.scss"
import React from "react"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo"
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

export type ProfileInfoType = {
    profile: ProfileType
    status: string | null
    updateStatus: (status: string | null) => void
}

export const Profile: React.FC<ProfileInfoType> = (props) => {
    return (
        <div className={style.Profile}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}
