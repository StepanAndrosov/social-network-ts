import React from "react"
import style from "./Dialogs.module.scss"
import {DialogItem} from "./DialogItem/DialogItem"
import {Message} from "./Message/Message"
import {DialogsPageType} from "../../state-study/state";

export const Dialogs: React.FC<DialogsPageType> = ({dialogsData, messagesData}) => {

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
                {
                    messagesData.map(item => <Message key={item.id + item.message} id={item.id} message={item.message} />)
                }
            </div>
        </div>
    )
}