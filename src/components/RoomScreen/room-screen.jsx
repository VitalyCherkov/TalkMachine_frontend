'use strict';

import React from 'react';

import './style.css';
import { Content } from "./Content/content";
import { SideberHeader } from "./SidebarHeader/sidebar-header";
import { Sideber } from "./Sidebar/sidebar";
import { ContentHeader } from "./ContentHeader/content-header";


export default class RoomScreen extends React.Component {
    render() {
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