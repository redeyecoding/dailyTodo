import React from 'react';
import classes from './AuthBackground.module.css';
import { connect } from 'react-redux';
import Model from '../Modal/Modal';

const Background = props => {
    const backgroundClass = 
        props.isError 
        ? 
            <>
                <Model error='OH NO!! ERROR!' />
                <div className={ `${classes.black_background } ${classes.positioning}` } />
                
            </>
        :
        <>
            <div className={ `${classes.background_color } ${classes.positioning}` }></div> 
            <div className={ `${classes.log_reg__background} ${classes.positioning}` }></div>  
        </>
    return (
    <>
        { backgroundClass }              
    </>
    )
};


const mapStateToProps = state => {
    return {
        isError: state.errorActive
    }
};

export default connect(mapStateToProps)(Background);

