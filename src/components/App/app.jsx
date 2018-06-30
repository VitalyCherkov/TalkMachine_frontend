'use strict';

import React from 'react';

import './style.css';
import './fonts/fonts.css';
import './fonts/iconfont/material-icons.css';

import AuthFormConfig from '../../constants/Forms/auth-form-config';
import createBaseForm from '../BaseForm/base-form';

const AuthForm = createBaseForm({
    formOptions: AuthFormConfig
});

export default class App extends React.Component{
    render() {
        return (
            <div>
                <AuthForm {...AuthFormConfig}/>
            </div>
        );
    }
}

