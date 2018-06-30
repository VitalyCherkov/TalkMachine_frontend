'use strict';

import FieldConfig from './field-config-type';
import FormConfig from './form-config-type';


const AuthFormConfig = new FormConfig({
    name: 'auth-form',
    fields: [
        new FieldConfig({
            name: 'email',
            type: 'email',
            placeholder: 'Email',
        }),
        new FieldConfig({
            name: 'password',
            type: 'password',
            placeholder: 'Password'
        }),
    ],
    submitButtonText: 'Login',
    secondaryButtonText: 'SignUp'
});

export default AuthFormConfig;