import React from 'react';
import classes from './Modal.module.css';
import { connect } from 'react-redux';
import {
    closeAlert
 } from '../../store/actions/alert';


const Modal = props => {
    return (
        props.isError 
        && 
        <div 
            onClick={ () => props.onCloseAlert(false) }
            className={ classes.Default_Modal }
        >
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

const mapDispatchToProps = dispatch => {
    return {
        onCloseAlert: closeError => dispatch( closeAlert( closeError ))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

