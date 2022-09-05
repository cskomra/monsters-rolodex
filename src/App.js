import React, {Component} from 'react';
import {SearchBox} from './components/search-box/search-box.component';
import {CardList} from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
    }
    console.log('constructor');
  }

  componentDidMount(){
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users => 
      this.setState(
        () => {
          return { monsters: users };
        },
        () => {
          console.log(this.state);
        }
      )
    );
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render(){
    console.log('render');
    const { monsters, searchField } = this.state;
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
