'use strict';

import { BASE_URL } from "../../constants/common/urls";

import { validate } from "./validate";


export const submit = (formConfig) => (values, dispatch) => {
    const errors = validate(formConfig)(values);
    if (Object.values(errors).length !== 0) {
        return errors;
    }

    dispatch(formConfig.submitActionCreator(values));
    return {};
};