import React, { useState, useEffect } from 'react';
import Card from '../../UI/Card/Card';
import classes from './Register.module.css';
import axios from 'axios';
import logo from "../../../assets/images/DoSTUFF.png";
import { connect } from 'react-redux';

import {
    setAlert,    
 } from '../../../store/actions/alert';



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

            const res = await axios
                .post('api/users', body, config)
                .catch((err) => { 
                    console.log(err); 
                    props.onAlert(err.msg);
                })


        } catch (error) {
            const { msg } = error.response.data.errors[0];
            props.onAlert(msg);
        }
      
    };

    const onCloseErrorHandler = event => {
        setUserPassword(event)
    };
    return  (
        <>           
            <main className={ classes.registration_container }>
            <section className={ classes.registration_form_container }>
                    <Card>
                        <form onSubmit={ event => onSubmitHandler(event) }> 
                        <div className={ classes.registration_form_title_container }>
                            <img src={ logo }/>
                        </div>
                        <span className={ classes.registration_form__title }>PLEASE REGISTER</span>

                            <div>
                                <div class={ classes.registration_form__label_container }>
                                    <label class={ classes.registration_form__labeling }>Firstname</label>
                                </div>
                                <input 
                                    onChange={ event => setFirstNameHandler(event.target.value) }
                                    className={ classes.registration_form__input }
                                    placeholder='Firstname' 
                                    value={ userFirstName }
                                    type='text' />
                            </div>


                            <div>
                                <div class={ classes.registration_form__label_container }>
                                    <label class={ classes.registration_form__labeling }>Lastname</label>
                                </div>
                                <input 
                                    onChange={ event => setLastNameHandler(event.target.value) }
                                    className={ classes.registration_form__input }
                                    placeholder='Lastname' 
                                    value={ userLastName }
                                    type='text' />
                            </div>

                            <div>
                                <div class={ classes.registration_form__label_container }>
                                    <label class={ classes.registration_form__labeling }>Email</label>
                                </div>
                                <input 
                                    onChange={ event => setUserEmailHandler(event.target.value) }
                                    className={ classes.registration_form__input }
                                    placeholder='Email' 
                                    value={ userEmail }
                                    type='email' />
                            </div>

                            <div>
                                <div class={ classes.registration_form__label_container }>
                                    <label className={ classes.registration_form__labeling }>Password</label>
                                </div>
                                
                                <input 
                                    className={ classes.registration_form__input }
                                    onChange={ event => setUserPasswordHandler(event.target.value) }
                                    placeholder='Password' 
                                    value={ userPassword }
                                    type='password' />
                            </div>

                            <div className={ classes.registration_form__submit_container }>
                                <button
                                    className={ classes.registration_form__submit_btn }
                                    type='submit'>SIGN UP</button>
                            </div>
                            <div 
                                onClick={ props.toggleForm }
                                className={ classes.registration_form__toggler }>
                                Already have an account?
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);