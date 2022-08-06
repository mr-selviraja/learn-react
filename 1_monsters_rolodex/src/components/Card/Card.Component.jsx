import { Component } from "react";

export default class Card extends Component {
    render() {
        const {id, name, email} = this.props.monster;

        return(
            <div className="card-container">
                <img 
                    src={`https://robohash.org/${id}?set=set2&size=180x180`} 
                    alt={`monster ${name}`} 
                />
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        )
    }
}