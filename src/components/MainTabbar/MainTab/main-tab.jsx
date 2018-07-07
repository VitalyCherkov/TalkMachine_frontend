'use strict';

import React from 'react';
import PropTypes from 'react-proptypes';
import { Link } from 'react-router-dom';


import IconNames from '../../../constants/MainTabbar/icon-names';

import './style.css';

export default class MainTab extends React.Component {
    get isActiveClassName() {
        if (this.props.isActive) {
            return 'tabbar-main__tab_active';
        }
        return null;
    }

    render() {
        const { icon, text, to } = this.props;

        return (
            <Link to={ to } className={ `tabbar-main__tab ${ this.isActiveClassName } `}>
                <i className="material-icons tabbar-main__tab-i">{ icon }</i>
                { text }
            </Link>
        );
    }
}

MainTab.propTypes = {
    icon: PropTypes.oneOf(Object.values(IconNames)),
    text: PropTypes.string,
    isActive: PropTypes.bool,
    to: PropTypes.string,
};