import { DialogType, MessageType, sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import { AppStateType} from "../../redux/redux-store";


type MapDispatchType = {
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}

type MapStateType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    newMessageBody: string
}

export type DialogsPropsType = MapDispatchType & MapStateType

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}

export const DialogsContainer = connect(mapStateToProps, {
    sendMessage,
    updateNewMessageBody
})(Dialogs)

