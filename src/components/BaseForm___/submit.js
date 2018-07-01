'use strict';

import {BASE_URL} from "../../constants/common/urls";

import {validate} from "./validate";


export const submit = formConfig => dispatch => values => {
    console.log('SUBMIT', values);
    dispatch(formConfig.submitActionCreator(values));

    const errors = validate(formConfig)(values);
    if (Object.values(errors).length === 0) {
        console.log(Object.values(errors));
        return errors;

    }

    fetch(`${ BASE_URL }${ formConfig.url }`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values),
    }).then((response) => {
        const contentType = response.headers.get("content-type");
        if(contentType && contentType.includes("application/json")) {
            return response.json();
        }
        throw new TypeError("Oops, we haven't got JSON!");
    }).then(function(json) {
        console.log(json);
    }).catch(function(error) {
        console.log(error);
    });

};