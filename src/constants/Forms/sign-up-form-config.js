'use strict';

import FieldConfig from './field-config-type';
import FormConfig from './form-config-type';
import { PASSWORD_MIN_LENGTH } from './constants';
import { required, minLength, passwordsMatching } from '../../utils/validators/validators';


const SignUpFormConfig = new FormConfig({
    name: 'sign-up-form',
    fields: [
        new FieldConfig({
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            validators: [ required ],
        }),
        new FieldConfig({
            name: 'username',
            type: 'text',
            placeholder: 'Username',
            validators: [ required ],
        }),
        new FieldConfig({
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            validators: [ required, minLength(PASSWORD_MIN_LENGTH) ],
        }),
        new FieldConfig({
            name: 'password-repeat',
            type: 'password',
            placeholder: 'Repeat your password',
            validators: [ required ],
        })
    ],
    submitButtonText: 'SignUp',
    linkText: 'Login',
    validators: [ passwordsMatching ]
});

export default SignUpFormConfig;