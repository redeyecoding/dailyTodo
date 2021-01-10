import React from 'react';
import Auth from '../../components/Auth/Auth';
import Header from '../Header/Header';
import ModalBackground from '../Background/ModalBackground';
import { connect } from 'react-redux';

const Layout = props => {
    const layout = null;

    return (
        <>
            {/* { 
                props.isError && 
                <ModalBackground>
                    <Header/>
                    <Auth />
                </ModalBackground> 
            } */}
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
