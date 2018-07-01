'use strict';
import ActionNames from './action_names';


export const FormInitializeAction = (formConfig) => ({
    type: ActionNames.FORM_INITIALIZE,
    payload: formConfig
});