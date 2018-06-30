'use strict';

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LogoPrimary from '../LogoPrimary/logo-primary';
import createBaseForm from '../BaseForm/base-form';

import AuthFormConfig from '../../constants/Forms/auth-form-config';
import SignUpFormConfig from '../../constants/Forms/sign-up-form-config';

import './style.css';


export default class NotAuthenticatedScreen extends React.Component {

    getAuthForm({ match }) {
        const AuthForm = createBaseForm({ formOptions: AuthFormConfig });
        AuthFormConfig.linkPath = `${this.props.match.url}signup`;
        return (
            <AuthForm { ...AuthFormConfig } />
        );
    }

    getSignUpForm({ match }) {
        const SignUpForm = createBaseForm({ formOptions: SignUpFormConfig });
        SignUpFormConfig .linkPath = `${this.props.match.url}login`;
        return (
            <SignUpForm {...SignUpFormConfig} />
        );
    }

    render() {
        console.log(this.props);

        return (
            <div className="not-authenticated">
                <div/>
                <div className="not-authenticated__content">
                    <LogoPrimary/>
                    <Switch>
                        <Route exact path={ `${ this.props.match.url }` } render={() => <Redirect to='/login' />} />
                        <Route path={ `${ this.props.match.url }login` } component={ this.getAuthForm.bind(this) } />
                        <Route path={ `${ this.props.match.url }signup` } component={ this.getSignUpForm.bind(this) } />
                    </Switch>
                </div>
                <div/>
            </div>
        );
    }
}
