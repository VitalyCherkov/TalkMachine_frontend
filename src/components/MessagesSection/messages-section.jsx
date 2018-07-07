'use strict';

import React from 'react';
import { connect } from 'react-redux';


class MessagesScreen extends React.Component {
    render() {
        return (
            <section className="messages-section">
                <div className="messages-section__container">

                </div>
                <div className="message-input">
                    <a className="message-input__button">
                        <i className="material-icons">attach_file</i>
                    </a>
                    <textarea className="message-input__textarea" placeholder="Write a message...">kek</textarea>
                    <a className="message-input__button">
                        <i className="material-icons">send</i>
                    </a>
                </div>
            </section>
        );
    }
}

export const WrappedMessageScreen = connect()(MessagesScreen);