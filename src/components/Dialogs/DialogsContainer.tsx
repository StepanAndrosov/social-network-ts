import {sendMessage} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapDispatchType = {
    sendMessage: (value: string) => void
}

type MapStateType = {
    dialogsData: Array<{ id: number, name: string }>
    messagesData: Array<{ id: number, message: string }>
}

export type DialogsPropsType = MapDispatchType & MapStateType

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {sendMessage})
)(Dialogs)

