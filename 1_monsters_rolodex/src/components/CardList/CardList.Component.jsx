import { Component } from "react";
import './CardList.Styles.css'
import Card from "../Card/Card.Component";

class CardList extends Component {
    render() {
        const { monsters } = this.props

        return(
            <div className="card-list">
                {monsters.map( (monster) => {
                    return(
                        <Card key={monster.id} monster={monster} />
                    )
                })}
            </div>
        )
    }
}

export default CardList;