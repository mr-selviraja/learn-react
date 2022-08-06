import { Component } from "react";

class CardList extends Component {
    render() {
        const { monsters } = this.props

        return(
            <div className="card-list">
                {monsters.map( (monster) => {
                    return <h3 key={monster.id}>{monster.name}</h3>
                })}
            </div>
        )
    }
}

export default CardList;