'use strict';

import React from 'react';

import IconNames from '../../constants/MainTabbar/incon-names';
import TabbarOptions from '../../constants/MainTabbar/tabbar-options';

import FormField from '../FormField/form-field';
import UsualButton from '../UsualButton/usual-button';
import MessageCard from '../MessageCard/message-card';
import MainTab from '../MainTabbar/MainTab/main-tab';
import MainTabbar from '../MainTabbar/main-tabbar';
import DialogCard from '../DialogCard/dialog-card';


import './style.css';
import './fonts/fonts.css';
import './fonts/iconfont/material-icons.css';

const formFieldProps = {
    type: 'email',
    placeholder: 'Your email here...',
    value: 'email@example.com',
    error: 'Incorrect email keke lolo',
    name: 'email',
};

const buttonProps = {
    type: 'primary',
    text: 'click me!',
    extraClassNames: ['form__button'],
};

const messageCardProps = {
    authorName: 'Imechko Familiya',
    created: '20:11',
    text: 'azaza kek lol oru!!!',
    extraClassNames: [],
};

const mainTabProps = {
    text: 'click me',
    icon: IconNames.CONTACTS,
    isActive: true,
};

const mainTabbarProps = {
    tabOptions: TabbarOptions
};

const dialogCardProps = {
    title: 'Imechko Familiya',
    lastUpdateDateTime: '10:11',
    notificationsCount: '17',
    text: 'aaaaaa aa sdf asgfd askgfd aksbvas cakhs fvkhas dkf vaskgf'
}

export default class App extends React.Component{
    render() {
        return (
            <div>
                <FormField {...formFieldProps}/>
                <UsualButton {...buttonProps}/>
                <MessageCard {...messageCardProps}/>
                <MainTab {...mainTabProps}/>
                <MainTabbar {...mainTabbarProps}/>
                <DialogCard {...dialogCardProps}/>
            </div>
        );
    }
}

