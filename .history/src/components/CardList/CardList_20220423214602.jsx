import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map(({ id, name, email }) => {
          return (
            <div className="card-container" key={id}>
              <img src="" alt="monster" />
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
