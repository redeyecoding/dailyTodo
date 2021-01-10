import React from 'react';
import Card from '../UI/Card/Card';
import classes from './Modal.module.css';
import { connect } from 'react-redux';


const Modal = props => {
    return (
        props.isError && <div className={ classes.Default_Modal }>MODAL</div>
    )
};

const mapStateToProps = state => {
    return {
        isError: state.errorActive
    }
};

export default connect(mapStateToProps)(Modal);

