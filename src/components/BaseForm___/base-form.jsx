// 'use strict';
//
// import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { reducer as fromReducer, Field, reduxForm } from 'redux-form';
//
// import ButtonTypes from '../../constants/UsualButton/button-types';
// import {BASE_URL} from "../../constants/common/urls";
//
// import UsualButton from '../UsualButton/usual-button';
//
// import {renderField} from "./render-field";
// import { validate } from './validate';
// import {submit} from "./submit";
//
// import './style.css';
//
// const ssubmit = (values) => {
//     console.log(values);
// };
//
// class BaseForm extends React.Component {
//
//     get fieldOptions() {
//         return this.props.fields;
//     }
//
//     renderSubmitButton() {
//         console.log(this.props);
//
//         const { handleSubmit } = this.props;
//         // const dispatchedOnSubmit = submit(dispatch);
//
//         return (
//             <UsualButton
//                 text={ this.props.submitButtonText }
//                 type={ ButtonTypes.PRIMARY }
//                 extraClassNames={ ['form__button'] }
//                 clickHandler={ handleSubmit(this.props.onSubmit.bind(this)) }
//             />
//         );
//     }
//
//     renderSecondaryButton() {
//         return (
//             <UsualButton
//                 text={ this.props.linkText }
//                 type={ ButtonTypes.SECONDARY }
//                 extraClassNames={ ['form__button'] }
//                 to={ this.props.linkPath }
//             />
//         );
//     }
//
//     render() {
//         const { handleSubmit, submit } = this.props;
//
//         return (
//             <div className="form">
//                 <form onSubmit={ handleSubmit(this.props.onSubmit.bind(this)) } >
//                     { this.fieldOptions.map(option =>
//                         <Field {...option} component={ renderField } />
//                     ) }
//                     <div className="form__buttons">
//                         { this.renderSubmitButton() }
//                         { this.renderSecondaryButton() }
//                     </div>
//                     { this.props.error && <p
//                         className="form__error text-error"
//                     >
//                         { error }
//                     </p> }
//                 </form>
//             </div>
//         );
//     }
// }
//
//
//
// const createBaseForm = ({ formConfig }) => {
//     return reduxForm({
//         form: formConfig.name,
//         validate: validate(formConfig),
//         onSubmit: (values, dispatch) => {
//             console.log('aaaa', values);
//         },
//     })(BaseForm);
// };
//
// export default createBaseForm;

//
// 'use strict';
//
// import React from 'react';
// import { reducer as fromReducer, Field, reduxForm } from 'redux-form';
//
// import ButtonTypes from '../../constants/UsualButton/button-types';
//
// import FormField from '../FormField/form-field';
// import UsualButton from '../UsualButton/usual-button';
//
// import { validate } from './validate';
// import './style.css';
//
// const renderField = ({ input, value, meta: { error, touched }, name, type, placeholder}) =>
//     <FormField
//         input={ input }
//         value={ value }
//         error={ error }
//         touched={ touched }
//         name={ name }
//         type={ type }
//         placeholder={ placeholder }
//     />;
//
//
// class BaseForm extends React.Component {
//
//     get fieldOptions() {
//         return this.props.fields;
//     }
//
//     renderSubmitButton() {
//         return (
//             <UsualButton
//                 text={ this.props.submitButtonText }
//                 type={ ButtonTypes.PRIMARY }
//                 extraClassNames={ ['form__button'] }
//                 clickHandler={ this.props.handleSubmit() }
//             />
//         );
//     }
//
//     renderSecondaryButton() {
//         return (
//             <UsualButton
//                 text={ this.props.linkText }
//                 type={ ButtonTypes.SECONDARY }
//                 extraClassNames={ ['form__button'] }
//                 to={ this.props.linkPath }
//             />
//         );
//     }
//
//     getRenderedField(option) {
//         return <Field {...option} component={ renderField } />
//     }
//
//     render() {
//         return (
//             <div className="auth-form form">
//                 <form>
//                     {/*<form onSubmit={ this.props.handleSubmit } >*/}
//                     { this.fieldOptions.map(option =>
//                         <Field {...option} component={ renderField } />
//                     ) }
//                     <div className="form__buttons">
//                         { this.renderSubmitButton() }
//                         { this.renderSecondaryButton() }
//                     </div>
//                     { this.props.error && <p>{ this.props.error }</p> }
//                 </form>
//             </div>
//         );
//     }
// }
//
// const onSubmit = (values) => {
//     console.log('SUBMIT');
//     return validate(values);
// };
//
// const createBaseForm = ({ formConfig }) => {
//     console.log(formConfig);
//     return reduxForm({
//         form: formConfig.name,
//         validate: validate(formConfig),
//         onSubmit: onSubmit,
//     })(BaseForm);
// };
//
// export default createBaseForm;


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

const createBaseForm = ({ formConfig }) => {
    return reduxForm({
        form: formConfig.name,
        validate: validate(formConfig),
        onSubmit: onSubmit,
    })(BaseForm);
};

export default createBaseForm;