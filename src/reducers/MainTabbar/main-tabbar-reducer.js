'use strict';

import { INITIAL_STATE } from './initial-state';
import ActionNames from '../../actions/MainTabbarActions/action_names';


export const mainTabbarReducer = (state = INITIAL_STATE, action) => {
    if (action.type === ActionNames.MAIN_TABBAR_CHANGE_ACTIVE) {
        state.active = action.payload.tabName
    }
    return state;
};