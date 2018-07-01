'use strict';

import React from 'react';
import { Field, reduxForm } from 'redux-form';

import ButtonTypes from '../../constants/UsualButton/button-types';

import UsualButton from '../UsualButton/usual-button';

import { validate } from './validate';
import { submit } from './on-submit';
import { renderField } from "./render-field";

import './style.css';



class BaseForm extends React.Component {

    get fieldOptions() {
        return this.props.fields;
    }

    renderSubmitButton() {
        return (
            <UsualButton
                text={ this.props.submitButtonText }
                type={ ButtonTypes.PRIMARY }
                extraClassNames={ ['form__button'] }
                isSubmit={ true }
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

    getRenderedField(option) {
        return <Field {...option} component={ renderField } />
    }

    render() {
        return (
            <div className="auth-form form">
                {/*<form>*/}
                <form onSubmit={ this.props.handleSubmit } >
                    { this.fieldOptions.map(option =>
                        <Field {...option} component={ renderField } />
                    ) }
                    <div className="form__buttons">
                        { this.renderSubmitButton() }
                        { this.renderSecondaryButton() }
                    </div>
                    { this.props.error && <p className="form__error text-error" >{ this.props.error }</p> }
                </form>
            </div>
        );
    }
}


const createBaseForm = ({ formConfig }) => {
    console.log(formConfig);
    return reduxForm({
        form: formConfig.name,
        validate: validate(formConfig),
        onSubmit: submit(formConfig),
    })(BaseForm);
};

export default createBaseForm;