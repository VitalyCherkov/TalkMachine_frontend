'use strict';

import React from 'react';
import PropTypes from 'react-proptypes';

import IconNames from '../../constants/MessageInput/icon-names';

import MessageInputButton from './MessageInputButton/message-input-button';
import MessageInputTextarea from './MessageInputTextarea/message-input-textarea';


import './style.css';

export default class MessageInput extends React.Component {
    render () {
        return (
            <div className="message-input">
                <MessageInputButton icon={ IconNames.ATTACH } />
                <MessageInputTextarea/>
                <MessageInputButton icon={ IconNames.SEND }/>
            </div>
        );
    }
}
