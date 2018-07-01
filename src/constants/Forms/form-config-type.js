'use strict';

import noop from '../../utils/noop';
import BaseActionCreator from "../../actions/base-action-creator";


export default class FormConfig {
    constructor({
        name = '',
        fields = [],
        submitButtonText = 'Submit',
        submitButtonHandler = noop,
        linkText = '',
        linkPath = '/',
        validators = [],
        url = '',
        submitActionCreator = () => new BaseActionCreator({}),
    }) {
        this.name = name;
        this.fields = fields;
        this.submitButtonText = submitButtonText;
        this.submitButtonHander = submitButtonHandler;
        this.linkText = linkText;
        this.linkPath = linkPath;
        this.validators = validators;
        this.url = url;
        this.submitActionCreator = submitActionCreator;
    }
};