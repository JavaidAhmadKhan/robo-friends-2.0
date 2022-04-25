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
        <h2>
          Hi {this.state.name}, I am {this.tate.profession}
        </h2>
        <button onClick={() => this.setState({ name: "Khan" })}>
          Change Name
        </button>
      </div>
    );
  }
}

export default App;
