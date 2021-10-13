import React from 'react'
import style from './App.module.scss'
import {Header} from "./components/Header/Header"
import {Nav} from "./components/Nav/Nav"
import {Profile} from "./components/Profile/Profile"
import {Dialogs} from "./components/Dialogs/Dialogs"
import {BrowserRouter, Route} from "react-router-dom"
import {StoreType} from "./state-study/state";

type PropsType = {
    store: StoreType
}

export const App: React.FC<PropsType> = ({store}) => {

    const profilePageProps = store.getState().profilePage
    const postsData = profilePageProps.postsData
    const addPost = profilePageProps.addPost.bind(store)
    const newPostText = profilePageProps.newPostText
    const updateNewPostText = profilePageProps.updateNewPostText.bind(store)

    const dialogsPageProps = store.getState().dialogsPage
    const dialogsData = dialogsPageProps.dialogsData
    const messagesData = dialogsPageProps.messagesData


    return (
        <BrowserRouter>
            <div className={style.Wrapper}>
                <Header/>
                <Nav/>
                <div className={style.Main}>
                    <Route path='/profile' render={() => <Profile postsData={postsData}
                                                                  addPost={addPost}
                                                                  newPostText={newPostText}
                                                                  updateNewPostText={updateNewPostText}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogsData={dialogsData}
                                                                  messagesData={messagesData} />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}
