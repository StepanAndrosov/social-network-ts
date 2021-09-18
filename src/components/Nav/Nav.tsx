import style from "./Nav.module.scss"
import styleWrapper from "./../../App.module.scss"
import React from "react"
import {NavLink} from "react-router-dom";

export const Nav: React.FC = () => {
    return (
        <nav className={`${style.Nav} + ${styleWrapper.Nav}`}>
            <ul>
                <li><NavLink to={"/profile"} activeClassName={style.active}>Profile</NavLink></li>
                <li><NavLink to={"/dialogs"} activeClassName={style.active}>Messages</NavLink></li>
                <li><NavLink to={"/news"} activeClassName={style.active}>News</NavLink></li>
                <li><NavLink to={"/music"} activeClassName={style.active}>Music</NavLink></li>
                <li><NavLink to={"/settings"} activeClassName={style.active}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}
