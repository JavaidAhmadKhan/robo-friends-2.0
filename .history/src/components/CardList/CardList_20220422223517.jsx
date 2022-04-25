import { Component } from "react";

class CardList extends Component {
  render() {
      const {monsters} = this.props;
    console.log(this.props);
    return (
      <div>
        {filteredMonsters.map(({ id, name, email }) => {
          return (
            <div key={id}>
              <h1>{name}</h1>
              <h2>{email}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
