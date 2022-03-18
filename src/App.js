import { useState, useEffect } from "react"; // importing the useState hook to replace this.state (class components)
import SearchBox from "./components/search-box/search-box.components";
import CardList from "./components/card-list/card-list.component";
import './App.css';


const App = () => {
  /** 
   * useState spits out an array with two elements => [value, setValue] => setValue() is a function
   * create anotber useState when there's a need for more variables to store
   */
  const [searchField, setSearchField] = useState(""); 
  const [monsters, setMonsters] = useState([]);
  const [filteredMonstersArr, setFilteredMonsters] = useState(monsters);

  /**
   * useEffect uses the side effects of JS to prevent infinite rendering (eqv componentDidMount)
   * it has a callback function to run the code we give it, and an array of dependencies
   * it only runs when the page loads and when the dependency array changes
   */
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => setMonsters(users));
  }, [])

  useEffect(() => {
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField);
    })
    setFilteredMonsters(filteredMonsters);
  }, [monsters, searchField]) // filter whenever monsters[] or searchField"" changes

  /**
   * Sets the value of searchField to what the user inputs, by calling setSearchField()
   */
  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
      setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className="app-title"> Monsters Rolodex</h1>
      <SearchBox 
        className="monsters-search-box"
        onChangeHandler={onSearchChange} 
        placeholder="search monsters" 
      />

      <CardList monsters={filteredMonstersArr}/>

    </div>
  );
}

export default App;
