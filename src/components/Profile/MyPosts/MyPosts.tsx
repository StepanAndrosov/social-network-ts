import React, {createRef} from "react";
import style from "./MyPosts.module.scss"
import {Post} from "./Post/Post"
import {ProfilePageType} from "../../../state-study/state";

export const MyPosts: React.FC<ProfilePageType> = ({postsData, ...props}) => {

    const newPostElement = createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }

    return (
        <div className={style.MyPosts}>
            <div className={style.postBlock}>
                <div>my posts</div>
                <div>
                    <div><textarea ref={newPostElement}
                                   onChange={onPostChange}
                                   value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add</button>
                    </div>
                </div>
            </div>
            {
                postsData.map(item => <Post key={item.id + item.message} id={item.id} message={item.message}
                                            likesCount={item.likesCount}/>)
            }
        </div>
    )
}