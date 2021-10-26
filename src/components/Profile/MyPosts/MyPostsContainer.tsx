import React from "react";
import {ActionsType} from "../../../store-study/store-study";
import {addPostAC, PostType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type MyPostsContainerType = {
    postsData: Array<PostType>
    dispatch: (action: ActionsType) => void
    newPostText: string
}

export const MyPostsContainer: React.FC<MyPostsContainerType> = ({postsData, ...props}) => {

    const addPost = (text: string) => {
        props.dispatch(addPostAC(text))
    }
    const updateNewPostText = (text: string) => {
        props.dispatch(updateNewPostTextAC(text))
    }

    return (
        <MyPosts postsData={postsData}
                 newPostText={props.newPostText}
                 updateNewPostText={updateNewPostText}
                 addPost={addPost}
        />
    )
}