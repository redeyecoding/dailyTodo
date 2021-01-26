import React from 'react';
import { Default } from  './Card.module.css';
import { connect } from 'react-redux';
import cn from 'classnames';


const Card = props => {
    return (
        <div className={ cn(Default, props.customClass) } >
            { props.children }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        isError: state.errorActive
    }
};

export default connect(mapStateToProps)(Card);

