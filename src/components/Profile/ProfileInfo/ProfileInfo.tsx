import style from "./ProfileInfo.module.scss"
import screenImg from "../../../accets/images/screen.jpg"
import React from "react"

export const ProfileInfo = () => {
    return (
        <div className={style.ProfileInfo}>
            <div>
                <img className={style.screenImg} src={screenImg} alt="blade-runner-background"/>
            </div>
            <div className={style.profileDescription}>ava</div>
        </div>
    )
}