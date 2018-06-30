'use strict';

import React from 'react';
import PropTypes from 'react-proptypes';

import './style.css';


export default class DialogCard extends React.Component {

    get title() {
        return this.props.title;
    }

    get notificationsCount() {
        return this.props.notificationsCount;
    }

    get lastUpdateDateTime() {
        return this.props.lastUpdateDateTime;
    }

    get text() {
        let cut_text =  this.props.text.substring(0, 45);
        if (cut_text.length < this.props.text.length) {
            cut_text = `${ cut_text }...`;
        }
        return cut_text;
    }

    render() {
        return(
            <div className="dialog-card">
                <div className="dialog-card__img">
                </div>
                <div className="dialog-card__content">
                    <div className="dialog-card__header">
                        <div className="dialog-card__title">{ this.title }</div>
                        <div className="dialog-card__meta">
                            <span className="dialog-card__notification">{ this.notificationsCount }</span>
                            <span className="dialog-card__date-time">{ this.lastUpdateDateTime }</span>
                        </div>
                    </div>
                    <div className="dialog-card__text">
                        { this.text }
                    </div>
                </div>
            </div>

        );
    }
}

DialogCard.propTypes = {
    title: PropTypes.string,
    notificationsCount: PropTypes.number,
    lastUpdateDateTime: PropTypes.string,
    text: PropTypes.string
};