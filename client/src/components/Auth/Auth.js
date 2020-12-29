import React, { useState } from 'react';
import Card from '../Layout/Card/Card';
import Header from '../Layout/Header/Header';
import './Auth.css';


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
                            <label class="form_login--labeling line--up">Username</label>
                            <input 
                                className="form_login--input line--up"
                                placeholder='Email' 
                                value={ userEmail }
                                type='email' />
                        </div>
                        <div  className='form_login-Input'>
                            <label className="form_login--labeling line--up">Password</label>
                            <input 
                                className="form_login--input line--up"
                                onChange={ setUpLoginInformation }
                                placeholder='Password' 
                                value={ userEmail }
                                type='password' />
                        </div>
                        <div className="form_login--submit">
                            <button
                                className="form_login--submit-btn"
                                clicked={ () => '' }
                                type='submit'>LOGIN</button>
                        </div>

                    </form>
                </Card>
            </section>    
        </>

    )
};

export default Auth;