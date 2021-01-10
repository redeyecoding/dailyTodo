import React from 'react';
import Auth from '../../components/Auth/Auth';
import Header from '../Header/Header';
import { connect } from 'react-redux';

const Layout = props => {
    return (
        <>
            <Header/>
            <Auth />
        </>
    )    
};

const mapStateToProps = state => {
    return {
        isError: state.errorActive
    }
};
export default connect(mapStateToProps)(Layout);
