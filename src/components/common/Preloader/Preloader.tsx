import Loader from "../../../accets/images/Skateboarding.gif";
import React from "react";
import style from "./Preloader.module.css"

export const Preloader = () => {
    return (
        <div className={style.Preloader}>
            <div>learn react</div>
            <div>
                <img style={{maxWidth: '40px'}} src={Loader} alt={'loader-Skateboarding'}/>
            </div>

        </div>
    )
}
