import axios from 'axios';
import {
    REGISTER_FAIL,
    REGISTER_SUCCESS
} from './actionTypes';

export const login = ({ userEmail, userPassword }) => async dispatch => {
    const body = JSON.stringify({ userEmail, userPassword });
    
    const config = {
            headers: {
                'Content-Type': 'application/json'
            }
    };
    
    try {
        const res = await axios.post('api/auth/', body, config)

        dispatch({
            type: REGISTER_SUCCESS,
            payload: 'BLAH'
        });        
    } catch {
        // const errors = err.response.data.errors.map( errMessage => {
        //     if ( typeof(errMessage)  === 'string' ) return errMessage;
        //     return errMessage.msg;
        // });
        // console.error(errors);

        dispatch({
            type: REGISTER_FAIL,
            payload: 'BLAH'
        });   
        // props.onAlert(errors.join(' '));
    }

    
    // Testing cookies
    // const res = await axios
    // .get('api/auth/')
    // .then( response => response) 
    

}



