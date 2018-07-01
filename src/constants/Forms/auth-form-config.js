'use strict';

import FieldConfig from './field-config-type';
import FormConfig from './form-config-type';
import { required } from '../../utils/validators/validators';


const AuthFormConfig = new FormConfig({
    name: 'auth-form',
    fields: [
        new FieldConfig({
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            validators: [ required ],
        }),
        new FieldConfig({
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            validators: [ required ],
        }),
    ],
    submitButtonText: 'Login',
    linkText: 'SignUp',
});

export default AuthFormConfig;