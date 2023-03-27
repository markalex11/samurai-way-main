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
import {RootStateType} from "./components/redux/state";
type AppPropsType = {
    state:RootStateType
    addPost: ()=>void
    updateNewPostText: (newText:string)=>void
}
function App(props:AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={'/dialogs'}
                           render={()=><Dialogs allDialogs={props.state.dialogsPage}/>}/>
                    <Route path={'/profile'} render={()=><Profile allProfile={props.state.profilePage}
                                                                  addPost={props.addPost}
                                                                  updateNewPostText={props.updateNewPostText}
                    />}/>
                    <Route path={'/news'} render={()=><News />}/>
                    <Route path={'/music'} render={()=><Music />}/>
                    <Route path={'/settings'} render={()=><Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
