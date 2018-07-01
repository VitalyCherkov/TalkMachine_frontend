'use strict';

class BaseActionCreator {
    constructor({ type = '', payload = null, tokenRequired = null } = {}) {
        this.type = type;
        this.payload = payload;
        this.tokenRequired = tokenRequired;
    }
}

export default BaseActionCreator;