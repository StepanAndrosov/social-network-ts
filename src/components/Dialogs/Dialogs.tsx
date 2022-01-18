import React from "react"
import style from "./Dialogs.module.scss"
import {DialogItem} from "./DialogItem/DialogItem"
import {Message} from "./Message/Message"
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {MaxLengthCreator, required} from "../../utils/validators/validators";

type TextareaDialogType = {
    newMessageBody: string
}
const maxLength = MaxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<TextareaDialogType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name={'newMessageBody'}
                component={Textarea}
                validate={[required, maxLength]}
                placeholder={"Enter your message"}
            />
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<TextareaDialogType>({
    form: 'dialogAddMessage'
})(AddMessageForm)

export const Dialogs: React.FC<DialogsPropsType> = ({dialogsData, messagesData, ...props}) => {

    const onSendMessageClick = (values: { newMessageBody: string }) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={style.Dialogs}>
            <div className={style.dialogItems}>
                {
                    dialogsData.map(item => item.id === 1 ?
                        <DialogItem className={style.active} id={item.id} name={item.name} key={item.id + item.name}/> :
                        <DialogItem id={item.id} name={item.name} key={item.id + item.name}/>)
                }
            </div>
            <div className={style.messages}>
                <div>{
                    messagesData.map(item => <Message key={item.id + item.message} id={item.id}
                                                      message={item.message}/>)
                }</div>
                <div>
                    <AddMessageFormRedux onSubmit={onSendMessageClick}  />
                </div>
            </div>
        </div>
    )
}
