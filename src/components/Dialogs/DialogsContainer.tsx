import {Dispatch} from "redux"
import {DialogsPageType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ActionsType, AppStateType} from "../../redux/redux-store";


type MapDispatchType = {
    sendMessageClick: () => void
    newMessageChange: (body: string) => void
}

const mapStateToProps = (state: AppStateType): DialogsPageType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>): MapDispatchType => {
    return {
        sendMessageClick: () => dispatch(sendMessageAC()),
        newMessageChange: (body: string) => dispatch(updateNewMessageBodyAC(body))
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

