import React from "react"
import { NavLink } from "react-router-dom";
import reactLogo from "../../accets/images/react.png"
import style from "./Header.module.scss"

type HeaderType = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth: boolean
}

export const Header: React.FC<HeaderType> = (props) => {
    return (
        <div className={style.Header}>
            <header >
                <img className={style.reactLogo} src={reactLogo} alt="react"/>

                <div className={style.loginBlock}>
                    {
                        props.isAuth ? <span className={style.profileName}>{props.login}</span> :
                        <NavLink to={'/login'}>Login</NavLink>
                    }
                </div>
            </header>
        </div>
    );
}

