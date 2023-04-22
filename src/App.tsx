import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter , Route} from "react-router-dom";
import {News} from "./components/News/news"
import {Music} from './components/Music/Music'
import {Settings} from './components/Settings/Settings'
import {ActionTypes, StoreType} from "./components/redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Users} from "./components/Users/users";
import {UsersContainer} from "./components/Users/usersContainer";

type AppPropsType = {
    // store: any
}
function App() {
    // const state = props.store.getState()
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
