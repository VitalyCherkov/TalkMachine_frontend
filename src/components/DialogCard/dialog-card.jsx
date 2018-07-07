'use strict';

import moment from 'moment';
import React from 'react';
import PropTypes from 'react-proptypes';

import './style.css';


export default class DialogCard extends React.Component {

    get title() {
        return this.props.title;
    }

    get notificationsCount() {
        return this.props.notificationsCount ? this.props.notificationsCount : 0;
    }

    get lastUpdateDateTime() {
        const lastUDT = this.props.lastUpdateDateTime;
        return lastUDT !== '' ? moment(lastUDT).format('HH:mm DD/MM/YYYY') : null;
    }

    get text() {
        let cut_text =  this.props.text.substring(0, 45);
        if (cut_text.length < this.props.text.length) {
            cut_text = `${ cut_text }...`;
        }
        return cut_text;
    }

    renderText() {
        return this.text && (<div className="dialog-card__text">
            { this.text }
        </div>);
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
                            { this.notificationsCount > 0 && <span className="dialog-card__notification">{ this.notificationsCount }</span> }
                            <span className="dialog-card__date-time">{ this.lastUpdateDateTime }</span>
                        </div>
                    </div>
                    { this.renderText() }
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

DialogCard.defaultProps = {
    notificationsCount: 0,
    text: '',
    lastUpdateDateTime: '',
};