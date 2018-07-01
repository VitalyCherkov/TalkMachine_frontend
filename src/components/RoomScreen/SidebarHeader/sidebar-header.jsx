'use strict';

import React from 'react';
import { connect } from 'react-redux';

import './style.css';


export class SideberHeader extends React.Component{
    render() {
        return (
            <div className='room__sidebar-header'>Room Sidebar Header</div>
        );
    }
}

export const WrappedSidebarHeader = connect()(SideberHeader);