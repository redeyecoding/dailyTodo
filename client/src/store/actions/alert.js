import * as actionType from './actionTypes';

// Set alert
export const setAlert = ( alert ) => {
    return {
        type: actionType.SET_ALERT,
        alert: alert,
    }
};


// Close Alert
export const closeAlert = ( closeError ) => {
    return {
        type: actionType.CLOSE_ALERT,
        alert: closeError,
    }
};