'use strict';


import React from 'react';
import DialogCard from '../DialogCard/dialog-card';

export const dialogCardDelegate = ({ key, listItem }) => (
    <DialogCard
        key={ key }
        title={ listItem.partner.username }
        lastUpdateDateTime={ listItem.last_msg_date }
    />
);