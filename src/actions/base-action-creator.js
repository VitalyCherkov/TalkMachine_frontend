'use strict';

class BaseActionCreator {
    constructor({ type = '', payload = null, tokenRequired = null } = {}) {
        this._type = type;
        this._payload = payload;
        this._tokenRequired = tokenRequired;
    }

    get type() {
        return this._type;
    }

    get payload() {
        return this._payload;
    }

    get tokenRequired() {
        return this._tokenRequired;
    }

}

export default BaseActionCreator;