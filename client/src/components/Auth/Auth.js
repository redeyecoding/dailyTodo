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
                    <form className="form_login-form" onSubmit={ 'D'}> 
                    <span>PLEASE LOGIN</span>
                        <div className='form_login-Input'>
                            <label class="form_login--labeling">Username</label>
                            <input 
                                className="form_login--input"
                                placeholder='Email' 
                                value={ userEmail }
                                type='email' />
                        </div>
                        <div  className='form_login-Input'>
                            <label className="form_login--labeling">Password</label>
                            <input 
                                className="form_login--input"
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