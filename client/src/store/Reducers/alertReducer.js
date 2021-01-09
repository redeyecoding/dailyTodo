import * as actionType from '../actions/actionTypes';

const initialState = {
    error: '',
    errorActive: false
};

const setAlert = (state=initialState, action) => {
    console.log(action.alert)
    switch( action.type ) {
        case actionType.SET_ALERT:
            return {
                ...state,
                error: action.alert,
                errorActive: true
            }
        default:
            return state
    }
};

export default setAlert;