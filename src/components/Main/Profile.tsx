import style from "./Profile.module.scss";
import screenImg from "../../accets/images/screen.jpg";
import React from "react";

const Profile = () => {
    return (
        <div className={style.Profile}>
            Main
            <div>
                <img className={style.screenImg} src={screenImg} alt="blade-runner-background"/>
            </div>
            <div>ava</div>
            <div>my posts
                <div>new post</div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>
        </div>
    )
}
export default Profile