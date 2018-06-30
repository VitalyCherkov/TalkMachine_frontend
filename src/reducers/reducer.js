'use strict';

import { Map } from 'immutable';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialState = Map({ isAuthenticated: false });

const reducers = {
    default: (state = initialState, action) => {
        return state;
    },
    form: formReducer
};

const reducer = combineReducers(reducers);

export default reducer;
