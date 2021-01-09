import * as actionType from '../actions/actionTypes';

const initialState = {
    error: ''
};

const setAlert = (state=initialState, action) => {
    console.log(action.alert)
    switch( action.type ) {
        case actionType.SET_ALERT:
            return {
                ...state,
                error: action.alert
            }
        default:
            return state
    }
};

export default setAlert;