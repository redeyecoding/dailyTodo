import React from 'react';

const Button = props => {
    return (
        <button 
            
            onClick={ props.clicked }
            type={ props.buttonType }>{ props.children }</button>
    )
};

export default Button;