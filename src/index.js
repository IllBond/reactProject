import * as serviceWorker from './serviceWorker';
import store from "./Redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppX from './App';

    ReactDOM.render(
                    <AppX state={store.getState()} dispatch={store.dispatch.bind(store) }/>,
        document.getElementById('root')
    );

serviceWorker.unregister();


