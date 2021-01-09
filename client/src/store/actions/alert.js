import * as actionType from './actionTypes';

console.log(actionType.SET_ALERT)
// Set alert
export const setAlert = ( alert ) => {
    return {
        type: actionType.SET_ALERT,
        alert: alert
    }
};