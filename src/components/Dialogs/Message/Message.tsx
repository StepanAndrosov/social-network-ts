import React from "react"
import style from "./Message.module.scss"

export type MessagePropsType = {
    id: number
    message: string
}

export const Message: React.FC<MessagePropsType> = ({message}) => {
    return (
        <div className={style.Message}>
            {message}
        </div>
    )
}