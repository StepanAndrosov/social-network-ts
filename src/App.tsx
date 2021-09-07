import React from 'react';
import style from './App.module.scss';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Profile";

 function App() {
    return (
        <div className={style.Wrapper}>
            <Header />
            <Nav />
            <Main />
        </div>
    );
}
export default App;
