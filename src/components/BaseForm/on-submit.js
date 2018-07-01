'use strict';

import { BASE_URL } from "../../constants/common/urls";

import { validate } from "./validate";


export const submit = (formConfig) => (values, dispatch) => {
    console.log('SUBMIT');

    const errors = validate(formConfig)(values);
    if (Object.values(errors).length !== 0) {
        console.log(Object.values(errors));
        return errors;
    }

    dispatch(formConfig.submitActionCreator(values));
};