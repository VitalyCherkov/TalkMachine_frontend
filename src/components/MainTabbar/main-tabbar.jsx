'use strict';

import React from 'react';
import PropTypes from 'react-proptypes';

import TabOption from '../../constants/MainTabbar/tab-option-type';

import MainTab from './MainTab/main-tab';

import './style.css';


export default class MainTabbar extends React.Component{

    get tabOptions() {
        return this.props.tabOptions;
    }

    render() {
        return (
            <div className="tabbar-main">
                {
                    this.tabOptions.map(option => <MainTab {...option}/>)
                }
            </div>
        );
    }
}

MainTabbar.PropTypes = {
    tabOptions: PropTypes.arrayOf(TabOption)
};