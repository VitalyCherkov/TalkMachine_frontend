'use strict';

import ActionNames from './action_names';


export const userLoginAction = ({ email, password }) => ({
    type: ActionNames.USER_LOGIN,
    payload: { email, password },
    tokenRequired: false,
});

const userSignUpAction = ({ email, username, password }) =>  ({
    type: ActionNames.USER_SIGN_UP,
    payload: { email, username, password },
    tokenRequired: false,
});

const userEditAction = ({
        email = null,
        username = null,
        password = null,
        first_name = null,
        last_name = null,
        bio = null
}) => ({
    type: ActionNames.USER_EDIT,
    payload: { email, username, password, first_name, last_name, bio },
    tokenRequired: true,
});

export const userAuthenticatedAction = ({
        isAuthenticated = false,
        email = null,
        username = null,
        first_name = null,
        last_name = null,
        bio = null,
}) => ({
    type: ActionNames.USER_AUTHENTICATED,
    payload: { isAuthenticated, email, username, first_name, last_name, bio },
    tokenRequired: true,
});

export const userLoggedOutAction = () => ({
    type: ActionNames.USER_LOGGED_OUT,
    payload: userAuthenticateAction({}).payload
});

const userLoginSucceededAction = (payload) => ({
    type: ActionNames.USER_LOGIN_SUCCEEDED,
    payload: payload
});

const userLoginFailedAction = ({payload}) => ({
    type: ActionNames.USER_LOGIN_FAILED,
    payload: payload
});

export const userAuthenticateAction = () => ({
    type: ActionNames.USER_AUTHENTICATE
});
