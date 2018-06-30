'use strict';

import BaseActionCreator from '../base-action-creator';
import ActionNames from './action-names';


class LoginUserAction extends BaseActionCreator {
    constructor({ email, password }) {
        super({
            type: ActionNames.USER_LOGIN,
            payload: arguments[0],
            tokenRequired: false,
        })
    }
}


class SignUpAction extends BaseActionCreator {
    constructor({ email, username, password }) {
        super({
            type: ActionNames.USER_SIGN_UP,
            payload: arguments[0],
            tokenRequired: false,
        })
    }
}


class EditUserAction extends BaseActionCreator {
    constructor({
        email = null,
        username = null,
        password = null,
        first_name = null,
        last_name = null,
        bio = null
    }) {
        super({
            type: ActionNames.USER_EDIT,
            payload: arguments[0],
            tokenRequired: true,
        })
    }
}


class UserAuthenticatedAction extends BaseActionCreator {
    constructor({
        email = null,
        username = null,
        password = null,
        first_name = null,
        last_name = null,
        bio = null,
    }) {
        super({
            type: ActionNames.USER_AUTHENTICATED,
            payload: arguments[0],
            tokenRequired: true,
        })
    }
}

class UserLoggedOutAction extends BaseActionCreator {
    constructor() {
        super({ type: ActionNames.USER_LOGGED_OUT })
    }
}