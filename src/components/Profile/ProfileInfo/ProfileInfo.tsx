import style from "./ProfileInfo.module.scss"
import React from "react"
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileInfoType} from "../Profile";
import {ProfileStatus} from "./ProfileStatus";


export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={style.ProfileInfo}>
            <div className={style.profilePhoto}>
                <img  src={props.profile.photos.large} alt={`${props.profile.fullName}`} />
            </div>
            <ProfileStatus status={props.profile.aboutMe}/>
            <div className={style.profileName}><span>My name: <b>{props.profile.fullName}</b></span></div>
            <div className={style.profileDescription}><b>{props.profile.aboutMe}</b></div>
            <div className={style.myContacts}>
                My contacts:
                <div><span><b>vk: </b>{props.profile.contacts.vk}</span></div>
                <div><span><b>github: </b>{props.profile.contacts.github}</span></div>
            </div>
        </div>
    )
}