import React, { useState } from 'react';
import Card from '../Layout/Card/Card';
import Header from '../Layout/Header/Header';
import './Auth.css';


const Auth = () => {
    const [ userEmail, setUserEmail ] = useState('');
    const [ userPassword, setUserPassword ] = useState('');

    const setUserEmailHandler = event => {
        setUserEmail(event)
    }

    const setUserPasswordHandler = event => {
        setUserPassword(event)
    }
    return  (
        <>
            <Header /> 
            <main className="login-container">
                <section className='form_login-container'>
                    <Card>
                        <form className="form_login-form" onSubmit={ 'D'}> 
                        <span className="form_login-form_title">PLEASE LOGIN</span>
                            <div className='form_login-Input'>
                                <label class="form_login--labeling line--up">Username</label>
                                <input 
                                    onChange={ event => setUserEmailHandler(event.target.value) }
                                    className="form_login--input line--up"
                                    placeholder='Email' 
                                    value={ userEmail }
                                    type='email' />
                            </div>
                            <div  className='form_login-Input'>
                                <label className="form_login--labeling line--up">Password</label>
                                <input 
                                    className="form_login--input line--up"
                                    onChange={ event => setUserPasswordHandler(event.target.value) }
                                    placeholder='Password' 
                                    value={ userPassword }
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
            </main>           
            
        </>

    )
};

export default Auth;