import React, {createRef} from "react";
import style from "./MyPosts.module.scss"
import {Post} from "./Post/Post"
import {PostType} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    postsData: Array<PostType>
    newPostText: string
    addPost: (text: string) => void
    updateNewPostText: (text: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = ({postsData, ...props}) => {

    const newPostElement = createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        const current = newPostElement.current
        if (current) {
            props.addPost(current.value)
        }
    }
    const onPostChange = () => {
        const current = newPostElement.current
        if (current) {
            props.updateNewPostText(current.value)
            current.value = ''
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
                        <button onClick={onAddPost}>Add</button>
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