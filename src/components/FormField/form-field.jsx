'use strict';

import React from 'react';
import PropTypes from 'react-proptypes';

import FieldTypes from '../../constants/FormField/field-types';

import './style.css';


class FormField extends React.Component {

    get errorBlock() {
        const { touched, error } = this.props;
        return touched && error ? (
            <p className='form-input-group__error form-input-group__error_multiline text-error'>
                { error }
            </p>
        ) : null;
    }

    get errorInputClassName() {
        const { touched, error } = this.props;
        return touched && error ?
            'form-input-group__input_error' : null;
    }

    render() {

        const { input, type, name, placeholder, value } = this.props;

        return (
            <div className='form-input-group form-input-group_multiline'>
                <input
                    { ...input }
                    className={ `form-input-group__input form-input-group__input_multiline ${ this.errorInputClassName }` }
                    type={ type }
                    name={ name }
                    placeholder={ placeholder }
                    value={ value }
                />
                { this.errorBlock }
            </div>
        );
    }
}

FormField.propTypes = {
    input: PropTypes.object,
    value: PropTypes.string,
    error: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.oneOf(Object.values(FieldTypes)),
    placeholder: PropTypes.string,
    touched: PropTypes.bool,
};

FormField.defaultProps = {
    // value: undefined,
    error: null,
    touched: false,
};

export default FormField;