import React from 'react';
import style from './App.module.scss';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";

const App: React.FC = () => {
    return (
        <div className={style.Wrapper}>
            <Header/>
            <div className={style.Nav}>
                <Nav/>
            </div>
            <div className={style.Main}>
                <Profile/>
                <Dialogs/>
            </div>
        </div>
    );
}
export default App;
