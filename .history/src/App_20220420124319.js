import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Javaid",
      profession: "Software Engineer",
    };
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
