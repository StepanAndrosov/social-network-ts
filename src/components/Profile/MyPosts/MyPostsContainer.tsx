import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";



export const MyPostsContainer: React.FC = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const addPost = (text: string) => {
                        store.dispatch(addPostAC(text))
                    }
                    const updateNewPostText = (text: string) => {
                        store.dispatch(updateNewPostTextAC(text))
                    }
                    return <MyPosts postsData={store.getState().profileReducer.postsData}
                             newPostText={store.getState().profileReducer.newPostText}
                             updateNewPostText={updateNewPostText}
                             addPost={addPost}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}