import style from "./Profile.module.scss"
import React from "react"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo"
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../api/api";


export type ProfileInfoType = {
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => void
    profile: ProfileType
    status: string | null
    updateStatus?: (status: string | null) => void
}

export const Profile: React.FC<ProfileInfoType> = (props) => {
    return (
        <div className={style.Profile}>
            <ProfileInfo
                saveProfile={props.saveProfile}
                savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </div>
    )
}
