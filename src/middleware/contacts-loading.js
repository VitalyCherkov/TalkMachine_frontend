'use strict';

import { API_URLS, BASE_URL } from '../constants/common/urls';
import ContactsActionNames from '../actions/ContactsActions/action_names';
import UserActionNames from '../actions/UserActions/action_names';
import { doGet } from '../utils/http';
import { ContactsLoadedAction, ContactsLoadNextPageAction } from '../actions/ContactsActions/action-creators';


const ContactsLoadingMiddleware = store => next => action => {

    if (action.type === UserActionNames.USER_AUTHENTICATED) {
        store.dispatch(ContactsLoadNextPageAction());
        return next(action);
    }

    if (action.type === ContactsActionNames.CONTACTS_LOAD_NEXT_PAGE) {
        const nextPageNumber = action.payload.page + 1;
        console.log('load next page of contacts', nextPageNumber);
        doGet({
            url: `${ BASE_URL }${ API_URLS.CONTACTS_LIST({ page: nextPageNumber }) }`
        }).then((json) => {
            console.log('LOADED: ', json);
            return next(ContactsLoadedAction({ ...json, pages: nextPageNumber }));
        }).catch((error) => {
            console.log(error);
        })
    }

    return next(action);
};

export default ContactsLoadingMiddleware;