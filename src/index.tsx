import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./components/redux/redux-store";
import StoreContext from "./StoreContext";
import {Provider} from "./StoreContext";


const renderFull = () => {
    ReactDOM.render(
        <Provider store={store}>
        <App store={store}/>
        </Provider>
        ,
        document.getElementById('root')
    )
}

renderFull()
store.subscribe(renderFull)

