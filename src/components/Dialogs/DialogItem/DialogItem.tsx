import React from "react";
import style from "./DialogItem.module.scss";
import {NavLink} from "react-router-dom";

export type DialogPropsType = {
    id: number
    name: string
    className?: string
}

export const DialogItem: React.FC<DialogPropsType> = ({id, name, className}) => {
    return (
        <div className={`${style.Dialog} + ${className}`}>
            <NavLink to={'/dialogs/' + id}>{name}</NavLink>
        </div>
    )
}