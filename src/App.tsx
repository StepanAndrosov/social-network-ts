import React from 'react'
import style from './App.module.scss'
import {Nav} from "./components/Nav/Nav"
import {BrowserRouter, Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeAppTC} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";

type MapStateToProps = {
    initialized: boolean
}
type MapDispatchType = {
    initializeAppTC: () => void
}
type PropsType = MapDispatchType & MapStateToProps

class App extends React.Component<PropsType> {

    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialized)
            return <Preloader/>
        return (
            <BrowserRouter>
                <div className={style.Wrapper}>
                    <HeaderContainer/>
                    <Nav/>
                    <div className={style.Main}>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>
                               }/>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>
                               }/>
                        <Route path='/users'
                               render={() => <UsersContainer/>
                               }/>
                        <Route path='/login'
                               render={() => <Login/>
                               }/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeAppTC})(App)

