'use strict';

import React from 'react';
import PropTypes from 'react-proptypes';

import IconNames from '../../../constants/MessageInput/icon-names';

import './style.css';


export default class MessageInputButton extends React.Component {

    get icon() {
        return this.props.icon;
    }

    render() {
        return (
            <a className="message-input__button">
                <i className="material-icons">{ this.icon }</i>
            </a>
        );
    }
}

MessageInputButton.PropTypes = {
    icon: PropTypes.oneOf(Object.values(IconNames))
};