'use strict';

import React from 'react';
import { connect } from 'react-redux';

import MainTab from './MainTab/main-tab';

import './style.css';
import IconNames from "../../constants/MainTabbar/icon-names";


export class MainTabbar extends React.Component{

    render() {
        return (
            <div className="tabbar-main">
                <MainTab icon={ IconNames.FORUM } to={ `/room/dialogs` }  text='Dialogs' />
                <MainTab icon={ IconNames.FORUM } to={ `/room/contacts` } text='Contacts' />
            </div>
        );
    }
}

export const WrappedMainTabbar = connect()(MainTabbar);