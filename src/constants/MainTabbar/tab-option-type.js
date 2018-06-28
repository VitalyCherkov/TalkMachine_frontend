'use strict';


export default class TabOption {
    constructor({
        icon = '',
        text = '',
        isActive = false
    } = { }) {
        this.icon = icon;
        this.text = text;
        this.isActive = isActive;
    }
};
