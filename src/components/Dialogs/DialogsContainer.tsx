import { DialogType, MessageType, sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import { AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from "redux";


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

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {sendMessage, updateNewMessageBody})
)(Dialogs)

