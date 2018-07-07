'use strict';

import { INITIAL_STATE } from './initial-state';
import ActionNames from '../../actions/ContactsActions/action_names';


export const contactsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionNames.CONTACTS_LOADED:
            state = { ...action.payload, results: [...state.results, ...action.payload.results] };
            break;
    }
    return state;
};