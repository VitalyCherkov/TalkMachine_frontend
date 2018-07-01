'use strict';

import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest, checker, redirectPath }) => {
    return (
        <Route
            {...rest}
            render={props =>
                checker ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={ redirectPath } />
                )
            }
        />
    )
};