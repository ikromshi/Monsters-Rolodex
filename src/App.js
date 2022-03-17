import { Component } from "react";
import SearchBox from "./components/search-box/search-box.components";
import CardList from "./components/card-list/card-list.component";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    }  
  }

  async componentDidMount() {
    const promise = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!promise.ok) {throw Error(promise.statusText)}
    const data = await promise.json(); 

    this.setState(() => {
      return {monsters: data}
    }
  )}

  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase();

    this.setState(() => {
      return {searchField};
    })
  }

  render() {
    const { monsters, searchField} = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField);
    })

    return (
      <div className="App">
        <h1 className="app-title"> Monsters Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder="search monsters" className="monsters-search-box"/>
        <CardList monsters={filteredMonsters}/>

      </div>
    );
  }
}
  

export default App;
