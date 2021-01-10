import React, { useState, useRef } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';

const Auth = () => {
    const [ toggleState, setToggleState ] = useState(false);
    const formToggleHandler = () => {
        setToggleState(!toggleState)
    };
    return (
            toggleState 
            ?
            <Register toggleForm={ formToggleHandler } />
            :
            <Login toggleForm={ formToggleHandler } />
   )
};

export default Auth;

