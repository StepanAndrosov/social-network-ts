import style from "./Profile.module.scss"
import screenImg from "../../accets/images/screen.jpg"
import React from "react"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile: React.FC = () => {
    return (
        <div className={style.Profile}>
            <div>
                <img className={style.screenImg} src={screenImg} alt="blade-runner-background"/>
            </div>
            <div>ava</div>
            <MyPosts />
        </div>
    )
}