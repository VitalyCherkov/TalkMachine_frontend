'use strict';

import noop from '../../utils/noop';

const formConfigDefaulProperites = {
    name: '',
    fields: [],
    submitButtonText: 'Submit',
    submitButtonHandler: noop,
    linkText: '',
    linkPath: '',
    validators: [],
    url: '',
    submitActionCreator: (payload) => ({type: '', payload}),
};

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
        submitActionCreator = (payload) => ({type: '', payload}),
    } = formConfigDefaulProperites) {
        return { ...formConfigDefaulProperites , ...arguments[0] };
    }
};