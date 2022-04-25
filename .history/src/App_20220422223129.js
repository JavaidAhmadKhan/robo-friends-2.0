import { Component } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          // these are all props of an input like className, type
          className="search-box"
          type="search"
          placeholder="search  monster"
          onChange={onSearchChange}
        />
        {/* {filteredMonsters.map(({ id, name, email }) => {
          return (
            <div key={id}>
              <h1>{name}</h1>
              <h2>{email}</h2>
            </div>
          );
        })} */}
        <CardList monsters={'These are just props'} />
      </div>
    );
  }
}

export default App;
