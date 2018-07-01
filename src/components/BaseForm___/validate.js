'use strict';


export const validate = (formConfig) => (values) => {
    let errors = {};

    for (let field of formConfig.fields) {
        const curValue = values[field.name];
        for (let validator of field.validators) {
            // TODO: на массив ошибок переделать
            const error = validator(curValue);
            if (error) {
                errors[field.name] = error;
            }
        }
    }

    for (let validator of formConfig.validators) {
        const error = validator(values);
        if (error) {
            errors['_error'] = error;
        }
    }

    console.log('validate', values, errors);
    return errors;
};