import React from "react"
import reactLogo from "../../accets/images/react.png"
import style from "./Header.module.scss"

function Header() {
    return (
        <div className={style.Header}>
            <header >
                <img className={style.reactLogo} src={reactLogo} alt="react"/>
            </header>
        </div>
    );
}

export default Header;
