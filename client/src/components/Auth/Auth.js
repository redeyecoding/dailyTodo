import React, { useState } from 'react';
import Card from '../Layout/Card/Card';
import Header from '../Layout/Header/Header';
import './Auth.css';
import Button from '../UI/Button/Button';


const Auth = () => {
    const [ userEmail, setUserEmail ] = useState('');

    const setUpLoginInformation = () => {
        setUserEmail(userEmail)
    }
    return  (
        <>
            <Header />
            <section className='form_login-container'>
                <Card>
                    <form onSubmit={ 'D'}> 
                        <div className='form_login-Input'>
                            <label>Username</label>
                            <input 
                                placeholder='Email' 
                                value={ userEmail }
                                type='email' />
                        </div>
                        <div  className='form_login-Input'>
                            <label>Password</label>
                            <input 
                                onChange={ setUpLoginInformation }
                                placeholder='Password' 
                                value={ userEmail }
                                type='password' />
                        </div>
                        <Button 
                            clicked={ () => '' }
                            buttonType='submit'>SUBMIT</Button>
                    </form>
                </Card>
            </section>    
        </>

    )
};

export default Auth;