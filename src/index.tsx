import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {subscribe} from "./components/redux/state";
import {addPost, updateNewPostText} from "./components/redux/state";


const renderFull = () => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    )
}

renderFull()
subscribe(renderFull)

