'use strict';

import React from 'react';

import { Content } from './Content/content';
import { SideberHeader } from './SidebarHeader/sidebar-header';
import { Sideber } from './Sidebar/sidebar';
import { ContentHeader } from './ContentHeader/content-header';

import './style.css';


export default class RoomScreen extends React.Component {
    render() {
        console.log('Room screen props', this.props);
        return(
            <section className='room'>
                <SideberHeader/>
                <Sideber/>
                <ContentHeader/>
                <Content/>
            </section>
        );
    }
}