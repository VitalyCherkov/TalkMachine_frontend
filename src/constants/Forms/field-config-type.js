'use strict';


export default class FieldConfig {
    constructor({
        value = '',
        error = '',
        name = '',
        type = '',
        placeholder = '',
        validators = [],
    }) {
        return { ...this, ...arguments[0] };
        this.value = value;
        this.error = error;
        this.name = name;
        this.type = type;
        this.placeholder = placeholder;
        this.validators = validators;
    }
};