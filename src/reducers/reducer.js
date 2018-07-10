'use strict';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { formReducer as ownFormReducer } from './Forms/form-reducer';
import { userReducer } from './User/user-reducer';
import { conversationsReducer } from './Conversations/conversations-reducer';
import { contactsReducer } from './Contacts/contacts-reducer';
import { mainTabbarReducer } from './MainTabbar/main-tabbar-reducer';


const reducers = {
    form: formReducer,
    forms: ownFormReducer,
    user: userReducer,
    conversations: conversationsReducer,
    contacts: contactsReducer,
    mainTabbar: mainTabbarReducer
};

const reducer = combineReducers(reducers);

export default reducer;
