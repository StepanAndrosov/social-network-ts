import style from "./ProfileInfo.module.scss"
import screenImg from "../../../accets/images/screen.jpg"
import React from "react"
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileInfoType} from "../Profile";


export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={style.ProfileInfo}>
            <div>
                <img className={style.screenImg} src={screenImg} alt="blade-runner-background"/>
            </div>
            <div>
                <img className={style.profilePhoto} src={props.profile.photos.large} alt={`users photo - ${props.profile.fullName}`} />
            </div>
            <div className={style.profileDescription}><b>{props.profile.aboutMe}</b></div>
            <div>
                My contacts:
                <div><span><b>vk: </b>{props.profile.contacts.vk}</span></div>
            </div>
        </div>
    )
}