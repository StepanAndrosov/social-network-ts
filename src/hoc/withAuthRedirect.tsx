import React, {} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MapStateType = {
    isAuth: boolean
}
type DispatchType = {}
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
} as MapStateType)

export function withAuthRedirect<WCP> (Component: React.ComponentType<WCP>) {

    const RedirectComponent:React.FC<MapStateType & DispatchType> = (props) => {

        const {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as WCP } />
    }

    return connect<MapStateType, DispatchType, WCP, AppStateType>(mapStateToProps, {})(RedirectComponent)
}
