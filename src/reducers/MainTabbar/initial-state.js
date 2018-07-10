'use strict';

import TabbarOptions from '../../constants/MainTabbar/tabbar-options';
import { RoomSectionNames } from '../../constants/MainTabbar/room-section-names';


export const INITIAL_STATE = {
    active: RoomSectionNames.CONTACTS,
    options: TabbarOptions
};