'use strict';

import ActionNames from './action_names';


export const MainTabbarChangeActiveAction = ({ tabName }) => ({
    type: ActionNames.MAIN_TABBAR_CHANGE_ACTIVE,
    payload: { tabName }
});