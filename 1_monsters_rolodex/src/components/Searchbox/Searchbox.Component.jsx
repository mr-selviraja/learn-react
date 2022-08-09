import React from 'react';
import './Searchbox.Styles.css';

const Searchbox = (props) => {
        const { onChangeHandler, placeholder, className } = props

        return(
            <input 
                type = "search" 
                className = { `searchbox ${className}` }
                placeholder = { placeholder }
                onChange = { onChangeHandler }   
            />
        )
}

export default Searchbox;