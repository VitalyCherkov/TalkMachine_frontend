'use strict';

import React from 'react';
import { reducer as fromReducer, Field, reduxForm } from 'redux-form';

import ButtonTypes from '../../constants/UsualButton/button-types';

import FormField from '../FormField/form-field';
import UsualButton from '../UsualButton/usual-button';

import './style.css';


class BaseForm extends React.Component {

    get fieldOptions() {
        return this.props.fields;
    }

    get renderField (){
        return ({ value, meta, name, type, placeholder}) => {
            return <FormField
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
                <form>
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

const createBaseForm = ({ formOptions }) => {
    return reduxForm({
        form: formOptions.name
    })(BaseForm);
};

export default createBaseForm;