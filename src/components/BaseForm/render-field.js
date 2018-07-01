'use strict';

import React from 'react';
import FormField from "../FormField/form-field";


export const renderField = ({ input, value, meta: { error, touched }, name, type, placeholder}) =>
    <FormField
        input={ input }
        value={ value }
        error={ error }
        touched={ touched }
        name={ name }
        type={ type }
        placeholder={ placeholder }
    />;
