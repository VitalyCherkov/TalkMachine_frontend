'use strict';

import ActionNames from "../actions/UserActions/action-names";


const UserLoginMiddleware = store => next => action => {

    if (action.type === "@@redux-form/SET_SUBMIT_SUCCEEDED") {
        console.log('Login User data: ', action);
        return next(action);
    }

};

export default UserLoginMiddleware;