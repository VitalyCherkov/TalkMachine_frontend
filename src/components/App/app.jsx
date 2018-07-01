'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './style.css';
import './fonts/fonts.css';
import './fonts/iconfont/material-icons.css';

import { WrappedNotAuthenticatedScreen }  from '../NotAuthenticatedScreen/not-authenticated-screen';
import RoomScreen from '../RoomScreen/room-screen';
import { PrivateRoute } from "../PrivateRoute/private-route";


class App extends React.Component{
    render() {

        const { isAuthenticated } = this.props;
        console.log('isA', isAuthenticated);

        return (
            <BrowserRouter>
                <Switch>
                    <PrivateRoute
                        path='/room'
                        component={ RoomScreen }
                        checker={ isAuthenticated }
                        redirectPath={ `/login` }
                    />
                    <PrivateRoute
                        path='/'
                        component={ WrappedNotAuthenticatedScreen }
                        checker={ !isAuthenticated }
                        redirectPath={ `/room` }
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}


const putStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated
});

export const WrappedApp = connect(putStateToProps)(App);

