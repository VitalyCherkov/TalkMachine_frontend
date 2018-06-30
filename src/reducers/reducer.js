'use strict';

import { Map } from 'immutable';

const initialState = Map({ isAuthenticated: false });

export default (state = initialState, action) => {
    return state;
}