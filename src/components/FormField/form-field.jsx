'use strict';

import React from 'react';
import PropTypes from 'react-proptypes';

import FieldTypes from '../../constants/FormField/field-types';

import './style.css';


class FormField extends React.Component {
    render() {

        let errorBlock = null;
        let errorInputClassName = null;
        if (this.props.error && this.props.error !== '') {
            errorBlock = <p className="form-input-group__error form-input-group__error_multiline text-error">
                {this.props.error}
            </p>;

            errorInputClassName = "form-input-group__input_error";
        }

        return (
            <div className="form-input-group form-input-group_multiline">
                <input
                    className={`form-input-group__input form-input-group__input_multiline ${errorInputClassName}`}
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                />
                {errorBlock}
            </div>
        );
    }
}

FormField.PropTypes = {
    value: PropTypes.string,
    error: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.oneOf(Object.values(FieldTypes)),
    placeholder: PropTypes.string,
};

export default FormField;