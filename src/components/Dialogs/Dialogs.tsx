import React, {ChangeEvent} from "react"
import style from "./Dialogs.module.scss"
import {DialogItem} from "./DialogItem/DialogItem"
import {Message} from "./Message/Message"
import {DialogType, MessageType} from "../../redux/dialogs-reducer";

type DialogsPageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    newMessageBody: string
    sendMessageClick: () => void
    newMessageChange: (body: string) => void
}

export const Dialogs: React.FC<DialogsPageType> = ({dialogsData, messagesData, newMessageBody, ...props}) => {

    const onSendMessageClick = () => {
        props.sendMessageClick()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.newMessageChange(body)
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
                    <textarea placeholder={"Enter your message"}
                              value={newMessageBody}
                              onChange={onNewMessageChange}
                    />
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}