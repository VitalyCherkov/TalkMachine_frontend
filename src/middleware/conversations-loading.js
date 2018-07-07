'use strict';


import UserActionNames from "../actions/UserActions/action_names";
import {
    ConversationsLoadedAction,
    ConversationsLoadNextPageAction
} from "../actions/ConversactionsActions/action-creators";
import ConversationsActionNames from "../actions/ConversactionsActions/action_names";
import { doGet } from "../utils/http";
import { API_URLS, BASE_URL } from "../constants/common/urls";

const ConversationsLoadingMiddleware = store => next => action => {
    if (action.type === UserActionNames.USER_AUTHENTICATED) {
        store.dispatch(ConversationsLoadNextPageAction());
        return next(action);
    }

    if (action.type === ConversationsActionNames.CONVERSATIONS_LOAD_NEXT_PAGE) {
        const nextPageNumber = action.payload.page + 1;
        doGet({
            url: `${ BASE_URL }${ API_URLS.CONVERSATIONS_LIST({ page: nextPageNumber }) }`
        }).then((json) => {
            console.log(json);
            return next(ConversationsLoadedAction({ ...json, pages: nextPageNumber }));
        }).catch((error) => {
            console.log(error);
        })
    }

    return next(action);
};

export default ConversationsLoadingMiddleware;