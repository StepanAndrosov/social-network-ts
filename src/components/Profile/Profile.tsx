import style from "./Profile.module.scss"
import React from "react"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo"
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export type ProfileInfoType = {
profile: {
    aboutMe: null | string
    contacts: {
        facebook: null | string
        website: null | string
        vk: null | string
        twitter: null | string
        instagram: null | string
        youtube: null | string
        github: null | string
        mainLink: null | string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: null | string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
}

export const Profile: React.FC<ProfileInfoType> = (props) => {
    return (
        <div className={style.Profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer  />
        </div>
    )
}