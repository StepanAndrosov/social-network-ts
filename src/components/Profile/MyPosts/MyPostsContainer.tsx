import {addPost, PostType, updateNewPostText} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsType = {
    postsData: Array<PostType>
    newPostText: string
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

export const MyPostsContainer = connect(mapStateToProps, {
    updateNewPostText,
    addPost
})(MyPosts)