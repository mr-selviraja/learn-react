import { Component } from "react";

export default class Searchbox extends Component {
    render() {
        const { onChangeHandler, placeholder, className } = this.props

        return(
            <input 
                type = "search" 
                className = { className }
                placeholder = { placeholder }
                onChange = { onChangeHandler }   
            />
        )
    }
}