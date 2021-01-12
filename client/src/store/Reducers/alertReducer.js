import * as actionType from '../actions/actionTypes';

const initialState = {
    error: '',
    errorActive: false
};

const alertReducer = (state=initialState, action) => {
    console.log(action.alert)

    switch( action.type ) {
        case actionType.SET_ALERT:
            return {
                ...state,
                error: action.alert,
                errorActive: true
            }
        case actionType.CLOSE_ALERT:
            return {
                ...state,
                error: '',
                errorActive: action.alert
            }
        default:
            return state
    }
};

export default alertReducer;