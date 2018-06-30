'use strict';

import React from 'react';
import PropTypes from 'react-proptypes';

import './style.css';


export default class MessageCard extends React.Component {

    get authorName() {
        return this.props.authorName;
    }

    get extraClassNames() {
        return this.props.extraClassNames.join(' ');
    }

    get created() {
        return this.props.created;
    }

    get text() {
        return this.props.text;
    }

    render() {
        return (
            <div className={ `message-card ${ this.extraClassNames }` }>
                <div className="message-card__header">
                    <div className="message-card__title">{ this.authorName }</div>
                    <div className="message-card__meta">{ this.created }</div>
                </div>
                <div className="message-card__content">{ this.text }</div>
            </div>
        );
    }
};

MessageCard.propTypes = {
    extraClassNames: PropTypes.arrayOf(PropTypes.string),
    authorName: PropTypes.string,
    crated: PropTypes.string,
    text: PropTypes.string,
};
