import React from 'react';
import style from './App.module.scss';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className={style.Wrapper}>
                <Header/>
                    <Nav/>
                <div className={style.Main}>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
