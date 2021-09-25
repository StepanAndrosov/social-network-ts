import React from "react";
import style from "./MyPosts.module.scss"
import {Post} from "./Post/Post"
import { ProfilePageType} from "../../../state-study/state";

export const MyPosts: React.FC<ProfilePageType> = ({postsData}) => {
    return (
        <div className={style.MyPosts}>
            <div className={style.postBlock}>
                <div>my posts</div>
                <div>
                    <div><textarea placeholder={'Here can to enter text'}></textarea></div>
                    <div>
                        <button>Add</button>
                    </div>
                </div>
            </div>
            {
                postsData.map(item => <Post key={item.id + item.message} id={item.id} message={item.message} likesCount={item.likesCount}/>)
            }
        </div>
    )
}