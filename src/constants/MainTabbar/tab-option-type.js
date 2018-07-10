'use strict';


const tabOptionDefaultProperties = {
    icon: '',
    name: '',
    isActive: false,
    path: '/'
};

export default class TabOption {
    constructor({
        icon = '',
        name = '',
        isActive = false,
        path = '/'
    } = {}) {
        return { ...tabOptionDefaultProperties, ...arguments[0] };
    }
};
