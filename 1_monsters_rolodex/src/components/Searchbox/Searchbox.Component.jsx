import { Component } from "react";
import './Searchbox.Styles.css';

export default class Searchbox extends Component {
    render() {
        const { onChangeHandler, placeholder, className } = this.props

        return(
            <input 
                type = "search" 
                className = { `searchbox ${className}` }
                placeholder = { placeholder }
                onChange = { onChangeHandler }   
            />
        )
    }
}