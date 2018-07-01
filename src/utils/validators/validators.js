'use strict';

import {FIELD_NAMES} from "../../constants/Forms/constants";


const required = value => {
    return value ? undefined : 'This field is required';
};

const minLength =
        min => value => !value || value.length < min ? `Must be ${min} characters or more` : undefined;

const passwordsMatching = (values) => {
    if (!values || !values[FIELD_NAMES.PASSWORD] || !values[FIELD_NAMES.PASSWORD_REPEAT])
        return undefined;

    if (values[FIELD_NAMES.PASSWORD] !== values[FIELD_NAMES.PASSWORD_REPEAT])
        return 'Passwords don\'t match';
    return undefined;
};

export { required, minLength, passwordsMatching };