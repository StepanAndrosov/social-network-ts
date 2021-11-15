import Loader from "../../../accets/images/Skateboarding.gif";
import React from "react";


const style = {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center"
}
export const Preloader = () => {
    return (
        <div style={style}>
            <img src={Loader} alt={'loader-Skateboarding'}/>
        </div>
    )
}