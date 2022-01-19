import React from "react"
import { NavLink } from "react-router-dom";
import reactLogo from "../../accets/images/react.png"
import style from "./Header.module.scss"

type HeaderType = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth: boolean
    logoutTC: () => void
}

export const Header: React.FC<HeaderType> = (props) => {
    return (
        <div className={style.Header}>
            <header >
                <img className={style.reactLogo} src={reactLogo} alt="react"/>

                <div className={style.loginBlock}>
                    {
                        props.isAuth
                            ? <div className={style.profileName}><div>{props.login}</div> <button onClick={props.logoutTC}>Logout</button></div>
                            : <NavLink to={'/login'}>Login</NavLink>
                    }
                </div>
            </header>
        </div>
    );
}

