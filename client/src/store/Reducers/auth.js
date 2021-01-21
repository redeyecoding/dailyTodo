import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/actionTypes';

const initialState = {
    token: [],
    isAuthenticated: null,
    loading: true,
    user: null

};

export const registerReducer = ( state=initialState, action) => {
    
    switch( action.type ) {
        case REGISTER_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                loading: false
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true
            }
    }
};
