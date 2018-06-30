'use strict';

import React from 'react';
import PropTypes from 'react-proptypes';

import FieldTypes from '../../constants/FormField/field-types';

import './style.css';


class FormField extends React.Component {

    get errorBlock() {
        if (this.props.error && this.props.error !== '') {
            return <p className="form-input-group__error form-input-group__error_multiline text-error">
                { this.props.error }
            </p>;
        }
        return null;
    }

    get errorInputClassName() {
        if (this.props.error && this.props.error !== '') {
            return "form-input-group__input_error";
        }
        return null;
    }

    render() {
        return (
            <div className="form-input-group form-input-group_multiline">
                <input
                    { ...this.props.input }
                    className={ `form-input-group__input form-input-group__input_multiline ${ this.errorInputClassName }` }
                    type={ this.props.type }
                    name={ this.props.name }
                    placeholder={ this.props.placeholder }
                    value={ this.props.value }
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
};

FormField.defaultProps = {
    value: null,
    error: null,
};

export default FormField;