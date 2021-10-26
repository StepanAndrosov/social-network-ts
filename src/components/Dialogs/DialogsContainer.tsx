import React from "react"
import {ActionsType} from "../../store-study/store-study";
import {DialogType, MessageType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

type DialogsContainerType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    newMessageBody: string
    dispatch: (action: ActionsType) => void
}

export const DialogsContainer: React.FC<DialogsContainerType> = ({dialogsData, messagesData, newMessageBody, dispatch}) => {

    const sendMessageClick = () => {
        dispatch(sendMessageAC())
    }
    const newMessageChange = (body: string) => {
        dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <Dialogs dialogsData={dialogsData}
                 messagesData={messagesData}
                 newMessageBody={newMessageBody}
                 sendMessageClick={sendMessageClick}
                 newMessageChange={newMessageChange}
        />
    )
}