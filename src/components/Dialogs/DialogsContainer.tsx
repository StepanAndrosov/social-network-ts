import {Dispatch} from "react"
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {ActionsType} from "../../store-study/store-study";

const mapStateToProps = (state: StateType) => {
    return {
        dialogsData: state.dialogsReducer.dialogsData,
        messagesData: state.dialogsReducer.messagesData,
        newMessageBody: state.dialogsReducer.newMessageBody
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        sendMessageClick: () => dispatch(sendMessageAC()),
        newMessageChange: (body: string) => dispatch(updateNewMessageBodyAC(body))
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

