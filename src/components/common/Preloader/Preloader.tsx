import Loader from "../../../accets/images/Skateboarding.gif";
import React from "react";

const style = {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    "flex-direction": "column",
    alignItems: "center"
}
export const Preloader = () => {
    return (
        <div style={style}>
            <div>learn react</div>
            <img style={{maxWidth: '40px'}} src={Loader} alt={'loader-Skateboarding'}/>
        </div>
    )
}
