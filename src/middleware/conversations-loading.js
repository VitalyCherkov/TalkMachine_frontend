'use strict';


import UserActionNames from "../actions/UserActions/action_names";
import { ConversationsLoadNextPageAction } from "../actions/ConversactionsActions/action-creators";
import ConversationsActionNames from "../actions/ConversactionsActions/action_names";
import { doGet } from "../utils/http";
import { API_URLS, BASE_URL } from "../constants/common/urls";

const ConversationsLoadingMiddleware = store => next => action => {
    if (action.type === UserActionNames.USER_AUTHENTICATED) {
        store.dispatch(ConversationsLoadNextPageAction());
        console.log('aaa');
        return next(action);
    }

    if (action.type === ConversationsActionNames.CONVERSATIONS_LOAD_NEXT_PAGE) {
        doGet({
            url: `${ BASE_URL }${ API_URLS.CONVERSATIONS_LIST({ page: action.payload.page }) }`
        }).then((json) => {
            console.log(json);
        }).catch((error) => {
            console.log(error);
        })
    }
};

export default ConversationsLoadingMiddleware;