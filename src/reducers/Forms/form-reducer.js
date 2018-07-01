'use strict';

import ActionNames from '../../actions/FormActions/action_names'
import { INITIAL_STATE } from "./initial-state";


export const formReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionNames.FORM_INITIALIZE: {
            const formConfig = action.payload;

            if (!state.forms) {
                state.forms = {};
            }
            if (!state.forms.initial) {
                state.forms.initial = {}
            }
            state.forms.initial[formConfig.name] = formConfig;
        }
    }
    return state;
};