import {Dispatch} from "redux";
import {addPostAC, ProfilePageType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {ActionsType, AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";

type mapDispatchType = {
    updateNewPostText: (text: string) => void
    addPost: (text: string) => void
}

const mapStateToProps = (state: AppStateType): ProfilePageType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>): mapDispatchType => {
    return {
        updateNewPostText: (text: string) => dispatch(updateNewPostTextAC(text)),
        addPost: (text: string) => dispatch(addPostAC(text))
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)