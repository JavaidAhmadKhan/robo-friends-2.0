import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
        },
        {
          name: "Bob",
        },
        {
          name: "Sally",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster, index) => {  
          <h1></h1>
        })}
      </div>
    );
  }
}

export default App;
