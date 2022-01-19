import React from 'react'
import style from './App.module.scss'
import {Nav} from "./components/Nav/Nav"
import {BrowserRouter, Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import Login from "./components/Login/Login";

export const App: React.FC = () => {

    return (
        <BrowserRouter>
            <div className={style.Wrapper}>
                <HeaderContainer />
                <Nav/>
                <div className={style.Main}>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />
                    }/>
                    <Route path='/dialogs' render={() => <DialogsContainer />
                    }/>
                    <Route path='/users' render={() => <UsersContainer  />
                    }/>
                    <Route path='/login' render={() => <Login  />
                    }/>
                </div>
            </div>
        </BrowserRouter>
    )
}
