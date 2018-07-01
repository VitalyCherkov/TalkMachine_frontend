import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { WrappedApp } from './components/App/app';
import reducer from './reducers/reducer';
import ActionsLogger from "./middleware/actions-logger";
import { userAuthenticateAction } from './actions/UserActions/action-creators';
import UserLoginMiddleware from "./middleware/user-auth";
import ConversationsLoadingMiddleware from "./middleware/conversations-loading";

const store = createStore(reducer, applyMiddleware(
    UserLoginMiddleware,
    ConversationsLoadingMiddleware
));

store.dispatch(userAuthenticateAction());

ReactDOM.render(
    <Provider store={ store }>
        <WrappedApp/>
    </Provider>,
    document.getElementById('root')
);
