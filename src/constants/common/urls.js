'use strict';

const BASE_URL = 'http://localhost:8010';

const API_URLS = {
    USER_LOGIN: '/user/login',
    USER_SIGN_UP: '/user/signup',
    USER_LOGOUT: '/user/logout',
    USER_EDIT: '/user/edit',
    USER_ME: '/user/me',
    CONVERSATIONS_LIST: ({ page = 1 }) => `/messages/conversations/page/${ page }`,
    CONTACTS_LIST: ({ page = 1 }) => `/contacts/page/${ page }`,
};

export { BASE_URL, API_URLS };