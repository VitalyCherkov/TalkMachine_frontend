'use strict';

import BaseActionCreator from '../base-action-creator';
import ActionNames from './action-names';


const userLoginAction = ({ email, password }) => ({
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

const userAuthenticatedAction = ({
        email = null,
        username = null,
        password = null,
        first_name = null,
        last_name = null,
        bio = null,
}) => ({
    type: ActionNames.USER_AUTHENTICATED,
    payload: { email, username, password, first_name, last_name, bio },
    tokenRequired: true,
});

const userLoggedOutAction = (payload) => ({
    type: ActionNames.USER_LOGGED_OUT,
    payload: payload
});

const userLoginSucceededAction = (payload) => ({
    type: ActionNames.USER_LOGIN_SUCCEEDED,
    payload: payload
});

const userLoginFailedAction = ({payload}) => ({
    type: ActionNames.USER_LOGIN_FAILED,
    payload: payload
});


export { userLoginAction };
