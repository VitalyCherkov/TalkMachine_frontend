'use strict';

import noop from '../../utils/noop';


export default class FormConfig {
    constructor({
        name = '',
        fields = [],
        submitButtonText = 'Submit',
        submitButtonHandler = noop,
        secondaryButtonText = '',
        secondaryButtonHandler = noop,
    }) {
        this.name = name;
        this.fields = fields;
        this.submitButtonText = submitButtonText;
        this.submitButtonHander = submitButtonHandler;
        this.secondaryButtonText = secondaryButtonText;
        this.secondaryButtonHandler = secondaryButtonHandler;
    }
};