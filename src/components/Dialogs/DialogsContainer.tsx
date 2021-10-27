import React from "react"
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


export const DialogsContainer: React.FC = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const sendMessageClick = () => {
                        store.dispatch(sendMessageAC())
                    }
                    const newMessageChange = (body: string) => {
                        store.dispatch(updateNewMessageBodyAC(body))
                    }
                    return <Dialogs dialogsData={store.getState().dialogsReducer.dialogsData}
                                    messagesData={store.getState().dialogsReducer.messagesData}
                                    newMessageBody={store.getState().dialogsReducer.newMessageBody}
                                    sendMessageClick={sendMessageClick}
                                    newMessageChange={newMessageChange}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}