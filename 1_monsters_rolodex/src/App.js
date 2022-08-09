import './App.css';
import { useState, useEffect } from 'react'
import CardList from './components/CardList/CardList.Component';
import Searchbox from './components/Searchbox/Searchbox.Component';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setMonsters(users))
  }, []);

// 'filteredMonsters' value will only change in case there's any change in either of
// 'searchField/monsters'. So, if we don't use 'useEffect' here, 'filteredMonsters'
// will be constructured in every render of the Component even if it's not needed as
// we only want it to be constructed only when 'monsters/searchField' changed.
  useEffect(() => {
    const newFilteredMonsters = monsters.filter( (monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [searchField, monsters]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  };

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <Searchbox 
        onChangeHandler = {onSearchChange} 
        placeholder = 'Search monster' 
        className = 'searchbox__monsters'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App;
