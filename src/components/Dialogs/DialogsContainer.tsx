import { DialogType, MessageType, sendMessage} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import { AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from "redux";


type MapDispatchType = {
    sendMessage: (value: string) => void
}

type MapStateType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
}

export type DialogsPropsType = MapDispatchType & MapStateType

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {sendMessage})
)(Dialogs)

