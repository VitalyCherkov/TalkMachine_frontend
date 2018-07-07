'use strict';

import FieldConfig from './field-config-type';
import FormConfig from './form-config-type';
import { PASSWORD_MIN_LENGTH, FIELD_NAMES } from './constants';
import { required, minLength, passwordsMatching } from '../../utils/validators/validators';
import { API_URLS } from '../common/urls';


const SignUpFormConfig = new FormConfig({
    name: 'sign-up-form',
    fields: [
        new FieldConfig({
            name: FIELD_NAMES.EMAIL,
            type: 'email',
            placeholder: 'Email',
            validators: [ required ],
        }),
        new FieldConfig({
            name: FIELD_NAMES.USERNAME,
            type: 'text',
            placeholder: 'Username',
            validators: [ required ],
        }),
        new FieldConfig({
            name: FIELD_NAMES.PASSWORD,
            type: 'password',
            placeholder: 'Password',
            validators: [ required, minLength(PASSWORD_MIN_LENGTH) ],
        }),
        new FieldConfig({
            name: FIELD_NAMES.PASSWORD_REPEAT,
            type: 'password',
            placeholder: 'Repeat your password',
            validators: [ required ],
        })
    ],
    submitButtonText: 'SignUp',
    linkText: 'Login',
    validators: [ passwordsMatching ],
    url: API_URLS.USER_SIGN_UP,
});

export default SignUpFormConfig;