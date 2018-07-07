'use strict';

import {INITIAL_STATE} from "./initial-state";
import ActionNames from "../../actions/UserActions/action_names";


export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionNames.USER_AUTHENTICATED:
            state = { ...state, ...action.payload };
            break;
        case ActionNames.USER_LOGOUT:
            state = { ...state, ...action.payload };
            break;
    }
    return state;
};