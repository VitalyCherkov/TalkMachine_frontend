'use strict';

import React from 'react';

import './style.css';
import logoSvg from './logo_mini.svg';


export default class LogoPrimary extends React.Component {
    render() {
        return (
            <div className="primary-logo">
                <img src={ logoSvg } className="primary-logo__img" />
                <div className="primary-logo__text">
                    TalkMachine aaa
                </div>
            </div>
        );
    }
};