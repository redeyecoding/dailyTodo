import { useState, useRef } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';

const Auth = () => {
    const [ toggler, setToggler ] = useRef({ toggle: false });

    const formToggleHandler = () => {
        console.log(toggler)
    }
    return (

        <div 
            onClick={ formToggleHandler }
            className='form_login--register__login'>
            { toggler && "Already have an account?" }
        </div>
    )
};

export default Auth;