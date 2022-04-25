import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster1: {
        name: "Linda",
      },
      monster2: {
        name: "Bob",
      },
        monster3: {
          name: "Sally",
        },
      },
    }
      

  render() {
    return (
      <div className="App">
        <h1>Robo Friends</h1>
      </div>
    );
  }
}

export default App;
