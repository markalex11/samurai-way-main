import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";
import {BrowserRouter , Route} from "react-router-dom";
import {News} from "./components/News/news"
import {Music} from './components/Music/Music'
import {Settings} from './components/Settings/Settings'
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/usersContainer";


function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={'/dialogs'}
                           render={()=><DialogsContainer />}/>
                    <Route path={'/profile'} render={()=><Profile />}/>
                    <Route path={'/users'} render={()=><UsersContainer/>}/>
                    <Route path={'/news'} render={()=><News />}/>
                    <Route path={'/music'} render={()=><Music />}/>
                    <Route path={'/settings'} render={()=><Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
