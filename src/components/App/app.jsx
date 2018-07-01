'use strict';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './style.css';
import './fonts/fonts.css';
import './fonts/iconfont/material-icons.css';

import NotAuthenticatedScreen from '../NotAuthenticatedScreen/not-authenticated-screen';
import RootScreen from '../RoomScreen/room-screen';


export default class App extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/room' component={ RootScreen }/>
                    <Route path='/' component={ NotAuthenticatedScreen }/>
                </Switch>
            </BrowserRouter>
        );
    }
}

