import {Dispatch} from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StateType} from "../../../redux/redux-store";
import {ActionsType} from "../../../store-study/store-study";
import {connect} from "react-redux";


const mapStateToProps = (state: StateType) => {
    return {
        postsData: state.profileReducer.postsData,
        newPostText: state.profileReducer.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        updateNewPostText: (text: string) => dispatch(updateNewPostTextAC(text)),
        addPost: (text: string) => dispatch(addPostAC(text))
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)