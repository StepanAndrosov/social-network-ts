import React, {createRef} from "react";
import style from "./MyPosts.module.scss"
import {Post} from "./Post/Post"
import {PostType, ActionsType} from "../../../state-study/state";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    postsData: Array<PostType>
    dispatch: (action: ActionsType) => void
    newPostText: string
}

export const MyPosts: React.FC<MyPostsPropsType> = ({postsData, ...props}) => {

    const newPostElement = createRef<HTMLTextAreaElement>()

    const addPost = () => {
        const current = newPostElement.current
        if (current) {
            props.dispatch(addPostAC(current.value))
        }
    }

    const onPostChange = () => {
        const current = newPostElement.current
        if (current) {
            props.dispatch(updateNewPostTextAC(current.value))
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