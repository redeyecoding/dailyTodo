import React from 'react';
import classes from  './Card.module.css';
import { connect } from 'react-redux';

const Card = props => {
    return (
        <div className={ classes.Default }>
            {props.children}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        isError: state.errorActive
    }
};

export default connect(mapStateToProps)(Card);

