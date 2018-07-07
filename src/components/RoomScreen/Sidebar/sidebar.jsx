'use strict';

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './style.css';
import {WrappedConversationsSection} from "../../ConversationsSection/conversations-section";
import {WrappedContactsSection} from "../../ContactsSection/contacts-section";



export class Sideber extends React.Component{
    render() {
        return (
            <div className='room__sidebar'>
                <Route exact path='/room' render={() => <Redirect to='/room/dialogs' />} />
                <Route component={ WrappedConversationsSection} path='/room/dialogs' />
                <Route component={ WrappedContactsSection } path='/room/contacts' />
            </div>
        );
    }
}