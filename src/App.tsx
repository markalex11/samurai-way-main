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
import {ReduxStateType} from "./components/redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    store:any
}
function App(props:AppPropsType) {
    // const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={'/dialogs'}
                           render={()=><DialogsContainer store={props.store}/>}/>
                    <Route path={'/profile'} render={()=><Profile store={props.store}/>}/>
                    <Route path={'/news'} render={()=><News />}/>
                    <Route path={'/music'} render={()=><Music />}/>
                    <Route path={'/settings'} render={()=><Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
