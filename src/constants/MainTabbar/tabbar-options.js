'use strict';

import IconNames from './icon-names';
import TabOption from './tab-option-type';
import { RoomSectionPaths } from './room-section-paths';
import { RoomSectionNames } from './room-section-names';


const TabbarOptions = [
    new TabOption({
        icon: IconNames.FORUM,
        name: RoomSectionNames.DIALOGS,
        path: RoomSectionPaths.DIALOGS,
    }),
    // new TabOption({
    //     icon: IconNames.GROUP,
    //     text: 'Chats'
    // }),
    new TabOption({
        icon: IconNames.CONTACTS,
        text: RoomSectionNames.CONTACTS,
        path: RoomSectionPaths.CONTACTS,
    }),
    // new TabOption({
    //     icon: IconNames.SEARCH,
    //     text: 'Search'
    // }),
    // new TabOption({
    //     icon: IconNames.SETTINGS,
    //     text: 'Settings'
    // })
];

export default TabbarOptions;