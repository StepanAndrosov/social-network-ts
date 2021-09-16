import style from "./Nav.module.scss"
import React from "react"


export const Nav: React.FC = () => {
    return (
        <nav className={style.Nav}>
            <ul>
                <li>Profile</li>
                <li>Messages</li>
                <li>News</li>
                <li>Music</li>
                <li>Settings</li>
            </ul>
        </nav>
    )
}
