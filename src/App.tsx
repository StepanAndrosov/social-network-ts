import React from 'react'
import style from './App.module.scss'
import {Header} from "./components/Header/Header"
import {Nav} from "./components/Nav/Nav"
import {Profile} from "./components/Profile/Profile"
import {Dialogs} from "./components/Dialogs/Dialogs"
import {BrowserRouter, Route} from "react-router-dom"
import {ActionsType} from "./store-study/store-study";
import {StateType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type StoreType = {
    dispatch: (action: ActionsType) => void
    getState: () => StateType
}

type PropsType = {
    store: any
}

export const App: React.FC<PropsType> = ({store}) => {

    const profilePageProps = store.getState().profileReducer
    const postsData = profilePageProps.postsData
    const newPostText = profilePageProps.newPostText

    const dialogsPageProps = store.getState().dialogsReducer
    const dialogsData = dialogsPageProps.dialogsData
    const messagesData = dialogsPageProps.messagesData
    const newMessageBody = dialogsPageProps.newMessageBody
    const dispatch = store.dispatch.bind(store)


    return (
        <BrowserRouter>
            <div className={style.Wrapper}>
                <Header/>
                <Nav/>
                <div className={style.Main}>
                    <Route path='/profile' render={() => <Profile postsData={postsData}
                                                                  newPostText={newPostText}
                                                                  dispatch={dispatch}/>
                    }/>
                    <Route path='/dialogs' render={() => <DialogsContainer dialogsData={dialogsData}
                                                                  messagesData={messagesData}
                                                                  newMessageBody={newMessageBody}
                                                                  dispatch={dispatch}/>
                    }/>
                </div>
            </div>
        </BrowserRouter>
    )
}
