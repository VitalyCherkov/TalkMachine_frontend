import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/app';
import reducer from './reducers/reducer';
import ActionsLogger from "./middleware/actions-logger";



const store = createStore(reducer, applyMiddleware(ActionsLogger));

ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>,
    document.getElementById('root')
);
