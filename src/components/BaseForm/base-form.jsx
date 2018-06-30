'use strict';

import React from 'react';
import { reducer as fromReducer, Field, reduxForm } from 'redux-form';

import ButtonTypes from '../../constants/UsualButton/button-types';

import FormField from '../FormField/form-field';
import UsualButton from '../UsualButton/usual-button';

import { validate } from './validate';
import './style.css';


class BaseForm extends React.Component {

    get fieldOptions() {
        return this.props.fields;
    }

    get renderField (){
        return ({ input, value, meta, name, type, placeholder}) => {

            return <FormField
                input={ input }
                value={ value }
                error={ meta.error }
                name={name}
                type={type}
                placeholder={placeholder}
            />
        };
    }

    renderSubmitButton() {
        return (
            <UsualButton
                text={ this.props.submitButtonText }
                type={ ButtonTypes.PRIMARY }
                extraClassNames={ ['form__button'] }
                clickHandler={ this.props.handleSubmit.bind(this) }
            />
        );
    }

    renderSecondaryButton() {
        return (
            <UsualButton
                text={ this.props.linkText }
                type={ ButtonTypes.SECONDARY }
                extraClassNames={ ['form__button'] }
                to={ this.props.linkPath }
            />
        );
    }

    render() {
        return (
            <div className="auth-form form">
                <form onSubmit={ this.props.handleSubmit } >
                    { this.fieldOptions.map(option => <Field { ...option } component={ this.renderField }/>) }
                    <div className="form__buttons">
                        { this.renderSubmitButton() }
                        { this.renderSecondaryButton() }
                    </div>
                </form>
            </div>
        );
    }
}

const onSubmit = (values) => {
    console.log('SUBMIT');
    validate(values);
};

const createBaseForm = ({ formOptions }) => {
    return reduxForm({
        form: formOptions.name,
        validate: validate,
        onSubmit: onSubmit,
    })(BaseForm);
};

export default createBaseForm;