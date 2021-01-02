import React, { useState, useRef } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import './Auth.css';

const Auth = () => {
    const [ toggleState, setToggleState ] = useState(false);

    const formToggleHandler = () => {
        setToggleState(!toggleState)
    };

    let loadForm = null;
    if ( toggleState ) {
        loadForm =  <Login />

    };

    loadForm = <Register />

    return (
        <>
            { toggleState &&  <Register toggleForm={ formToggleHandler } />  }
            <Login toggleForm={ formToggleHandler } />
        </>
        
   )
}

export default Auth;

