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
        <h1>{this.state.monster1.name}</h1>
        
      </div>
    );
  }
}

export default App;
