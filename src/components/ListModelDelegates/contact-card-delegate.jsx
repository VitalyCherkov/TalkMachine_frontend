'use strict';


import React from 'react';
import DialogCard from '../DialogCard/dialog-card';

export const contactCardDelegate = ({ key, listItem }) => (
    <DialogCard key={ key } title={ `${ listItem.username }` }/>
);