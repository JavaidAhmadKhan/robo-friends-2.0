import { Component } from "react";
import "./App.css";

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

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monster"
          onChange={(event) => {
            console.log(event.target.value);
            const searchString = event.target.value.toLowerCase();
            this.setState(() => {
              return { monsters: filteredMonsters };
            });
          }}
        />
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
              <h2>{monster.email}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
