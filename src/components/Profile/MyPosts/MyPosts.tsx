import React from "react";
import style from "./MyPosts.module.scss"
import {Post} from "./Post/Post";

export const MyPosts: React.FC = () => {
    return (
        <div className={style.MyPosts}>
            <div>my posts</div>
            <div>
                <textarea></textarea>
                <button>Add</button>
            </div>
            <Post message={"Hi"} likesCount={0}/>
            <Post message={"Yo"} likesCount={0}/>
            <Post message={"It`s my first post"} likesCount={0}/>
        </div>
    )
}