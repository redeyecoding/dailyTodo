import React from 'react';
import Card from '../UI/Card/Card';
import classes from './Modal.module.css';
import { connect } from 'react-redux';


const Modal = props => {
    return (
        props.isError 
        && 
        <div className={ classes.Default_Modal }>
            <span className={ classes.close_error }>X</span>
            <div className={ classes.error_message}>
                <span>{ props.err }</span>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        err: state.error,
        isError: state.errorActive
    }
};

export default connect(mapStateToProps)(Modal);

