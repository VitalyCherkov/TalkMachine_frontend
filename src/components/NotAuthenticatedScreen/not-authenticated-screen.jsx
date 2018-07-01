'use strict';

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import LogoPrimary from '../LogoPrimary/logo-primary';
import createBaseForm from '../BaseForm/base-form';

import './style.css';

class NotAuthenticatedScreen extends React.Component {

    getAuthForm({ match }) {
        const { authFormConfig } = this.props;
        const AuthForm = createBaseForm({ formConfig: authFormConfig });
        authFormConfig.linkPath = `${ this.props.match.url }signup`;
        return (
            <AuthForm { ...authFormConfig } />
        );
    }

    getSignUpForm({ match }) {
        const { signUpFormConfig } = this.props;
        const SignUpForm = createBaseForm({ formConfig: signUpFormConfig });
        signUpFormConfig.linkPath = `${ this.props.match.url }login`;
        return (
            <SignUpForm {...signUpFormConfig} />
        );
    }

    render() {
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

const putStateToProps = (state) => {

    console.log(state);

    return {
        authFormConfig: state.forms.initial['auth-form'],
        signUpFormConfig: state.forms.initial['sign-up-form'],
    }
};

export const WrappedNotAuthenticatedScreen = connect(putStateToProps)(NotAuthenticatedScreen);