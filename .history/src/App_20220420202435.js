import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
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
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monster"
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

// Promise

const myPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve("I have succeeded");
    }, 1000);
  } else {
    reject("I have failed");
  }
});

myPromise
  .then((value) => console.log(value))
  .catch((rejectedValue) => console.log(rejectedValue));
