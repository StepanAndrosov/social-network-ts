import React from 'react'
import style from './App.module.scss'
import {Nav} from "./components/Nav/Nav"
import {Redirect, Route} from "react-router-dom"
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/whithSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

type MapStateToProps = {
    initialized: boolean
}
type MapDispatchType = {
    initializeApp: () => void
}
type PropsType = MapDispatchType & MapStateToProps

const SuspendedDialogs = withSuspense(DialogsContainer)

class App extends React.Component<PropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized)
            return <Preloader/>
        return (
            <div className={style.Wrapper}>
                <HeaderContainer/>
                <Nav/>
                <div className={style.Main}>
                    <Route
                        path='/'
                        render={() => <Redirect to={"/profile"}/>}
                    />
                    <Route
                        path='/profile/:userId?'
                        render={() => <ProfileContainer/>}
                    />
                    <Route
                        path='/dialogs'
                        render={() => <SuspendedDialogs />}
                    />
                    <Route
                        path='/users'
                        render={() => <UsersContainer/>}
                    />
                    <Route
                        path='/login'
                        render={() => <Login/>}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp})(App)

