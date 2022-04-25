import { Component } from "react";

import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { id, name, email } = monster;
          return (
            <Card/>
          );
        })}
      </div>
    );
  }
}

export default CardList;
