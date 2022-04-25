import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Javaid",
    };
  }

  render() {
    return (
      <div className="App">
        <h2>Your name is {this.props.name}</h2>
      </div>
    );
  }
}

export default App;
