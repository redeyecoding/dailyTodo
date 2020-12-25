import React from 'react';
import Card from '../Layout/Card/Card';
import Header from '../Layout/Header/Header';
import LoginInput from '../UI/LoginInput/LoginInput';

const Auth = () => {
    return  (
        <>
            <Header />
            <Card>
                LOGIN PLEASE
                <LoginInput />
            </Card>   
        </>

    )
};

export default Auth;