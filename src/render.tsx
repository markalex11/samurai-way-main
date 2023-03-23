import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import state from "./components/redux/state";
import {addPost, RootStateType} from "./components/redux/state";


export const renderFull = (state:RootStateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById('root')
    )
}