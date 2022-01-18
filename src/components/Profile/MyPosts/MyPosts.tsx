import React from "react";
import style from "./MyPosts.module.scss"
import {Post} from "./Post/Post"
import {PostType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {MaxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

type MyPostsPropsType = {
    postsData: Array<PostType>
    newPostText: string
    addPost: (text: string) => void
}


type TextareaPostType = {
    newPostText: string
}

const maxLength = MaxLengthCreator(50)

const AddPostForm: React.FC<InjectedFormProps<TextareaPostType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name={'newPostText'}
                component={Textarea}
                placeholder="It is a crazy FLUX!"
                validate={[required, maxLength]}
            />
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm<TextareaPostType>({
    form: 'postAddMessage'
})(AddPostForm)

export const MyPosts: React.FC<MyPostsPropsType> = ({postsData, ...props}) => {

    const onAddPost = (values: { newPostText: string }) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={style.MyPosts}>
            <div className={style.postBlock}>
                <div>Add post</div>
                <AddPostFormRedux onSubmit={onAddPost}/>
            </div>
            {
                postsData.map(item => <Post key={item.id + item.message}
                                            id={item.id}
                                            message={item.message}
                                            likesCount={item.likesCount}
                />)
            }
        </div>
    )
}
