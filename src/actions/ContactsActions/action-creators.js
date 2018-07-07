'use strict';

import ActionNames from './action_names';


export const ContactsLoadNextPageAction = ({ page = 0 } = {}) => ({
    type: ActionNames.CONTACTS_LOAD_NEXT_PAGE,
    payload: { page }
});

export const ContactsLoadedAction = ({
    has_next = false,
    count = 0,
    results = [],
    pages = 0,
} = {}) => ({
    type: ActionNames.CONTACTS_LOADED,
    payload: { has_next, count, results, pages }
});