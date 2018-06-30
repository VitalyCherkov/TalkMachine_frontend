'use strict';

import React from 'react';
import PropTypes from 'react-proptypes';

import './style.css';


export default class MessageInputTextarea extends React.Component{

    get placeholder() {
        return this.props.placeholder;
    }

    get text() {
        return this.props.text;
    }

    render() {
        return (
            <textarea className="message-input__textarea" placeholder={ this.placeholder }>
                { this.text }
            </textarea>
        );
    }
}

MessageInputTextarea.propTypes = {
    placeholder: PropTypes.string,
    text: PropTypes.string,
};

MessageInputTextarea.defaultProps = {
    placeholder: 'Write a message...',
    text: null,
};