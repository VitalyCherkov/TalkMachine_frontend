'use strict';

import ActionNames from "./action_names";


export const ConversationsLoadNextPageAction = ({ page } = {}) => ({
    type: ActionNames.CONVERSATIONS_LOAD_NEXT_PAGE,
    payload: { page }
});

export const ConversationsLoadedAction = ({
    has_next = false,
    count = 0,
    results = [],
} = {}) => ({
    type: ActionNames.CONVERSATIONS_LOADED,
    payload: { has_next, count, results }
});