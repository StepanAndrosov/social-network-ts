import React, {} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MapStateType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStateType => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect (Component: any) {

    const RedirectComponent:React.FC<MapStateType> = (props) => {

        const {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps } />
    }

    return connect(mapStateToProps, {})(RedirectComponent)
}
