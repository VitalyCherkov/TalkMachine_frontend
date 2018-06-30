'use strict';

import FieldConfig from './field-config-type';
import FormConfig from './form-config-type';


const SignUpFormConfig = new FormConfig({
    name: 'sign-up-form',
    fields: [
        new FieldConfig({
            name: 'email',
            type: 'email',
            placeholder: 'Email',
        }),
        new FieldConfig({
            name: 'username',
            type: 'text',
            placeholder: 'Username',
        }),
        new FieldConfig({
            name: 'password',
            type: 'password',
            placeholder: 'Password',
        }),
        new FieldConfig({
            name: 'password-repeat',
            type: 'password',
            placeholder: 'Repeat your password',
        })
    ],
    submitButtonText: 'SignUp',
    linkText: 'Login',
});

export default SignUpFormConfig;