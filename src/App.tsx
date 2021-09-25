import React from 'react'
import style from './App.module.scss'
import {Header} from "./components/Header/Header"
import {Nav} from "./components/Nav/Nav"
import {Profile} from "./components/Profile/Profile"
import {Dialogs} from "./components/Dialogs/Dialogs"
import {BrowserRouter, Route} from "react-router-dom"
import {StateType} from "./state-study/state"

export const App: React.FC<StateType> = ({profilePage, dialogsPage}) => {
    return (
        <BrowserRouter>
            <div className={style.Wrapper}>
                <Header/>
                <Nav/>
                <div className={style.Main}>
                    <Route path='/profile' render={() => <Profile postsData={profilePage.postsData} />}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogsData={dialogsPage.dialogsData} messagesData={dialogsPage.messagesData} />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}
