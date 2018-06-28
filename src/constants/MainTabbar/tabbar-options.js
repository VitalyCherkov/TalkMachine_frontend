'use strict';

import IconNames from './incon-names';
import TabOption from './tab-option-type';


const TabbarOptions = [
    new TabOption({
        icon: IconNames.FORUM,
        text: 'Dialogs'
    }),
    new TabOption({
        icon: IconNames.GROUP,
        text: 'Chats'
    }),
    new TabOption({
        icon: IconNames.CONTACTS,
        text: 'Contacts'
    }),
    new TabOption({
        icon: IconNames.SEARCH,
        text: 'Search'
    }),
    new TabOption({
        icon: IconNames.SETTINGS,
        text: 'Settings'
    })
];

export default TabbarOptions;