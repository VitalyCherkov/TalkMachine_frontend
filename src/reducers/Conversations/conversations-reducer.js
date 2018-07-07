'use strict';

import { INITIAL_STATE } from "./initial-state";
import ActionNames from "../../actions/ConversactionsActions/action_names";


export const conversationsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionNames.CONVERSATIONS_LOADED:
            state = { ...action.payload, results: [...state.results, ...action.payload.results] };
            break;
    }
    return state;
};