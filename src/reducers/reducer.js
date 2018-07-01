'use strict';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { formReducer as ownFormReducer } from "./Forms/form-reducer";
import {userReducer} from "./User/user-reducer";


const reducers = {
    form: formReducer,
    forms: ownFormReducer,
    user: userReducer,
};

const reducer = combineReducers(reducers);

export default reducer;
