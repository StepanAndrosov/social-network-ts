import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {logoutTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}
type MapDispatchType = {
    logoutTC: () => void
}
type PropsType = MapStateToPropsType & MapDispatchType

class HeaderContainer extends React.Component<PropsType> {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {logoutTC})(HeaderContainer)
