import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Javaid",
      age: 29,
    };
  }

  render() {
    return (
      <div className="App">
        <h2>Your name is {this.state.name}</h2>
      </div>
    );
  }
}

export default App;
