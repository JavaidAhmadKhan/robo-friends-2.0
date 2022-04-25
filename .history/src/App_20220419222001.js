import { Component } from "react";
import "./App.css";

const handler = () => {
  this.setState({
    name: "Javaid",
    age: 29,
  });
}


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
        <h3>You are just {this.state.age} years old! </h3>
        <button onClick={alert("button pressed")}>Change Name</button>
      </div>
    );
  }
}

export default App;
