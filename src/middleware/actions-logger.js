'use strict';


const ActionsLogger = store => next => action => {
    console.log('>>>>', action);
    return next(action);
};

export default ActionsLogger;