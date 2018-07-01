import SignUpFormConfig from "./Forms/sign-up-form-config";
import AuthFormConfig from "./Forms/auth-form-config";

const INITIAL_STATE = {
    initial: {
        'auth-form': AuthFormConfig,
        'sign-up-form': SignUpFormConfig,
    }
};

export default INITIAL_STATE;