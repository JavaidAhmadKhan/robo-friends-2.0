import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: "1",
        },
        {
          name: "Bob",
          id: "2",
        },
        {
          name: "Sally",
          id: "3",
        },
        {
          name: "Sue",
          id: "4",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>s
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
