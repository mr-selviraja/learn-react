import './App.css';
import { Component } from 'react'
import CardList from './components/CardList/CardList.Component';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState(
        () => {
          return {monsters: data};
        }
      ))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState( () => {
      return { searchField };
    } )
  }

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter( (monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <input 
          type="search" 
          placeholder='Enter monster name'
          onChange={onSearchChange}
        />
        {/* {filteredMonsters.map( (monster) => {
          return (
            <div key={monster.id}>
              <h4>{monster.name}</h4>
            </div>
          )
        })} */}
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
