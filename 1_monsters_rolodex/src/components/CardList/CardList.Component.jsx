import './CardList.Styles.css'
import Card from "../Card/Card.Component";

const CardList = ({ monsters }) => {

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

export default CardList;