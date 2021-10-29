import React from 'react'
import style from './App.module.scss'
import {Header} from "./components/Header/Header"
import {Nav} from "./components/Nav/Nav"
import {Profile} from "./components/Profile/Profile"
import {BrowserRouter, Route} from "react-router-dom"
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";

export const App: React.FC = () => {

    return (
        <BrowserRouter>
            <div className={style.Wrapper}>
                <Header/>
                <Nav/>
                <div className={style.Main}>
                    <Route path='/profile' render={() => <Profile />
                    }/>
                    <Route path='/dialogs' render={() => <DialogsContainer />
                    }/>
                    <Route path='/users' render={() => <UsersContainer />
                    }/>
                </div>
            </div>
        </BrowserRouter>
    )
}
