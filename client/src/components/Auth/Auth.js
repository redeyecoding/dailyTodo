import React, { useState, useRef } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';

const Auth = () => {

    const [ toggleState, setToggleState ] = useState(false);
    console.log('STATE')
    const formToggleHandler = () => {
        console.log(toggleState)
        setToggleState(!toggleState)
    };
     

    return (
            toggleState 
            ?
            <Register toggleForm={ formToggleHandler } />
            :
            <Login toggleForm={ formToggleHandler } />

              
   )
}

export default Auth;

