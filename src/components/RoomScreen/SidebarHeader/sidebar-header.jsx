'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { WrappedMainTabbar } from "../../MainTabbar/main-tabbar";

import './style.css';


export class SideberHeader extends React.Component{
    render() {
        return (
            <div className='room__sidebar-header'>
                <WrappedMainTabbar/>
            </div>
        );
    }
}

export const WrappedSidebarHeader = connect()(SideberHeader);