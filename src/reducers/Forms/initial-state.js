'use strict';

import SignUpFormConfig from "../../constants/Forms/sign-up-form-config";
import AuthFormConfig from "../../constants/Forms/auth-form-config";


export const INITIAL_STATE = {
    initial: {
        'auth-form': AuthFormConfig,
        'sign-up-form': SignUpFormConfig,
    }
};