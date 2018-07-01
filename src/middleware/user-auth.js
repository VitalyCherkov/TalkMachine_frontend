'use strict';

import ActionNames from "../actions/UserActions/action_names";
import {API_URLS, BASE_URL} from "../constants/common/urls";
import {doGet, doPost} from "../utils/http";
import {userAuthenticatedAction} from "../actions/UserActions/action-creators";

const UserLoginMiddleware = store => next => action => {

    if (action.type === ActionNames.USER_LOGIN) {

        doPost({
            url: `${ BASE_URL }${ API_URLS.USER_LOGIN }`,
            data: action.payload
        }).then((json) => {
            if (json.token) {
                window.localStorage.setItem('Token', json.token);
                return next(userAuthenticatedAction({ ...json, isAuthenticated: true }));
            }
            console.log(json);
        }).catch((error) => {
            console.log(error);
        });

        return next(action);
    }

    if (action.type === ActionNames.USER_AUTHENTICATE) {
        doGet({
            url: `${ BASE_URL }${ API_URLS.USER_ME }`
        }).then((json) => {
            console.log(json);
            return next(userAuthenticatedAction({ ...json, isAuthenticated: true }));
        }).catch((error) => {
            console.log('error', error);
            window.localStorage.removeItem('Token');
            return next(userAuthenticatedAction({ isAuthenticated: false }));
        });
    }

    if (action.type === ActionNames.USER_LOGOUT) {
        doPost({
            url: `${ BASE_URL }${ API_URLS.USER_LOGOUT }`
        });
        window.localStorage.removeItem('Token');
        return next(userAuthenticatedAction({ isAuthenticated: false }));
    }

    return next(action);
};

export default UserLoginMiddleware;