'use strict';

import { userLoginAction } from "../../actions/UserActions/action-creators";
import { required } from '../../utils/validators/validators';
import FieldConfig from './field-config-type';
import FormConfig from './form-config-type';
import { FIELD_NAMES } from "./constants";
import { API_URLS } from "../common/urls";


const AuthFormConfig = new FormConfig({
    name: 'auth-form',
    fields: [
        new FieldConfig({
            name: FIELD_NAMES.EMAIL,
            type: 'email',
            placeholder: 'Email',
            validators: [ required ],
        }),
        new FieldConfig({
            name: FIELD_NAMES.PASSWORD,
            type: 'password',
            placeholder: 'Password',
            validators: [ required ],
        }),
    ],
    submitButtonText: 'Login',
    linkText: 'SignUp',
    url: API_URLS.USER_LOGIN,
    submitActionCreator: userLoginAction
});

export default AuthFormConfig;