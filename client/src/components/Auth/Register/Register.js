import React, { useState, useEffect } from 'react';
import Card from '../../UI/Card/Card';
import Header from '../../Header/Header';
import '../Auth.css';
import axios from 'axios';


const Register = props => {
    const [ userFirstName, setFirstName ] = useState('');
    const [ userLastName, setLastName ] = useState('');
    const [ userEmail, setUserEmail ] = useState('');
    const [ userPassword, setUserPassword ] = useState('');
    const [ submitAction, setSubmitAction ] = useState(false);


    const setFirstNameHandler = event => {
        setFirstName(event)
    };

    const setLastNameHandler = event => {
        setLastName(event)
    };

    const setUserEmailHandler = event => {
        setUserEmail(event)
    };

    const setUserPasswordHandler = event => {
        setUserPassword(event)
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const userLogin = {
            name: `${userFirstName} ${userLastName}`,
            email: userEmail,
            password: userPassword
        };

        const body = JSON.stringify(userLogin);

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const res = await axios.post('api/users', body, config)
            console.log(res.data)
        } catch (error) {
            console.log(error.response.data.errors)
        }
      
    };
    return  (
        <>
            <Header /> 
            <main className="login-container">
                <section className='form_login-container'>
                    <Card>
                        <form className="form_login-form" onSubmit={ event => onSubmitHandler(event) }> 
                        <span className="form_login-form_title">SIGN UP</span>
                            <div  className='form_login-Input'>
                                <div class="form_login--label-container">
                                    <label className="form_login--labeling line--up">First</label>
                                </div>
                                <input 
                                    className="form_login--input line--up"
                                    onChange={ event => setFirstNameHandler(event.target.value) }
                                    placeholder='Firstname' 
                                    value={ userFirstName }
                                    type='text' />
                            </div>
                            <div  className='form_login-Input'>
                                <div class="form_login--label-container">
                                    <label className="form_login--labeling line--up">Last</label>
                                </div>
                                <input 
                                    className="form_login--input line--up"
                                    onChange={ event => setLastNameHandler(event.target.value) }
                                    placeholder='Lastname' 
                                    value={ userLastName }
                                    type='text' />
                            </div>
                            <div className='form_login-Input'>
                                <div class="form_login--label-container">
                                    <label class="form_login--labeling line--up">Username</label>
                                </div>
                                <input 
                                    onChange={ event => setUserEmailHandler(event.target.value) }
                                    className="form_login--input line--up"
                                    placeholder='Email' 
                                    value={ userEmail }
                                    type='email' />
                            </div>
                            <div  className='form_login-Input'>
                                <div class="form_login--label-container">
                                    <label className="form_login--labeling line--up">Password</label>
                                </div>
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
                                    type='submit'>SIGN UP</button>
                            </div>
                            <div 
                                onClick={ props.toggleForm }
                                className="form_login--register__login">
                                Already Have an account?
                            </div> 
                        </form>
                    </Card>
                </section>                
            </main>
        </>
    )
};

export default Register;