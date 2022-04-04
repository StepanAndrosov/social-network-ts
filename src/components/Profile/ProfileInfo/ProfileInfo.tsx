import style from "./ProfileInfo.module.scss"
import React from "react"
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileInfoType} from "../Profile";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import ProfileImg from "../../../accets/images/profileImg.jpg"

export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={style.ProfileInfo}>
            <img className={style.profilePhoto} src={props.profile.photos.large || ProfileImg}
                 alt={`${props.profile.fullName}`}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div className={style.profileName}><span>My name: <b>{props.profile.fullName}</b></span></div>
            <div className={style.myContacts}>
                My contacts:
                <div><span><b>vk: </b>{props.profile.contacts.vk}</span></div>
                <div><span><b>github: </b>{props.profile.contacts.github}</span></div>
            </div>
        </div>
    )
}
