'use strict';

import React from 'react';
import PropTypes from 'react-proptypes';

import IconNames from '../../../constants/MainTabbar/incon-names';

import './style.css';


export default class MainTab extends React.Component {
    get icon() {
        return this.props.icon;
    }

    get text() {
        return this.props.text;
    }

    get isActiveClassName() {
        if (this.props.isActive) {
            return 'tabbar-main__tab_active';
        }
        return null;
    }

    render() {
        return (
            <a className={`tabbar-main__tab ${this.isActiveClassName}`}>
                <i className="material-icons tabbar-main__tab-i">{this.icon}</i>
                {this.text}
            </a>
        );
    }
}

MainTab.PropTypes = {
    icon: PropTypes.oneOf(Object.values(IconNames)),
    text: PropTypes.string,
    isActive: PropTypes.bool,
};