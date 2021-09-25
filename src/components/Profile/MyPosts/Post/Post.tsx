import React from "react"
import style from "./Post.module.scss"
import postImg from "./../../../../accets/images/fin.jpg"
import {PostType} from "../../../../state-study/state";

export const Post: React.FC<PostType> = ({message, likesCount}) => {
    return (
        <div className={style.Post}>
            <img src={postImg} alt={"img post"}/>
            <div className={style.messageBlock}>
                <span>{message}</span>
                <span className={style.likesCount}>like: {likesCount}</span>
            </div>
        </div>
    )
}

