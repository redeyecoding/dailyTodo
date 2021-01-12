import React, { useState, useEffect } from 'react';
import Card from '../../UI/Card/Card';
import classes from './Login.module.css';
import axios from 'axios';
import logo from "../../../assets/images/DoSTUFF.png";
import { connect } from 'react-redux';

import {
    setAlert,
    
 } from '../../../store/actions/alert';



const Login = props => {
    const [ userEmail, setUserEmail ] = useState('');
    const [ userPassword, setUserPassword ] = useState('');
    const [ submitAction, setSubmitAction ] = useState(false);

    const setUserEmailHandler = event => {
        // build json object for logging in
        const loginObject = {};
        setUserEmail(event)
    }

    const setUserPasswordHandler = event => {
        setUserPassword(event)
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const userLogin = {
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

            const res = await axios
                .post('api/auth/', body, config)
                .catch((err) => { 
                    console.log(err); 
                    props.onAlert(err.msg);
                })

        } catch (error) {
            console.error(error.messages)
            const { msg } = error.response.data.errors[0];

            props.onAlert(msg);

        }
      
    };
    return  (
        <>
            <main className={ classes.main_login_container }>
                <section className={ classes.login_form_container }>
                    <Card>
                        <form onSubmit={ event => onSubmitHandler(event) }> 
                        <div className={ classes.login_form_title_container }>
                            <img src={ logo }/>
                        </div>
                        <span className={ classes.login_form__title }>PLEASE LOGIN</span>

                            <div>
                                <div class={ classes.login_form__label_container }>
                                    <label class={ classes.login_form__labeling }>Username</label>
                                </div>
                                <input 
                                    onChange={ event => setUserEmailHandler(event.target.value) }
                                    className={ classes.login_form__input }
                                    placeholder='Email' 
                                    value={ userEmail }
                                    type='email' />
                            </div>

                            <div>
                                <div class={ classes.login_form__label_container }>
                                    <label className={ classes.login_form__labeling }>Password</label>
                                </div>
                                
                                <input 
                                    className={ classes.login_form__input }
                                    onChange={ event => setUserPasswordHandler(event.target.value) }
                                    placeholder='Password' 
                                    value={ userPassword }
                                    type='password' />
                            </div>

                            <div className={ classes.login_form__submit_container }>
                                <button
                                    className={ classes.login_form__submit_btn }
                                    type='submit'>LOGIN</button>
                            </div>
                            <div 
                                onClick={ props.toggleForm }
                                className={ classes.login_form__toggler }>
                                Don't Have an account?
                            </div> 
                        </form>
                    </Card>
                </section>                
            </main>
        </>
    )
};


const mapStateToProps = state => {
    return {
        err: state.error,
        isError: state.errorActive
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAlert: alert => dispatch( setAlert( alert ))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);