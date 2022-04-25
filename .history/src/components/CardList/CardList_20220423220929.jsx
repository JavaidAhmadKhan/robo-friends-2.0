import { Component } from "react";
import Card from "../Card/Card";

import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { id, name, email } = monster;
          return <Card monster={monster} name={name} email={email} />;
        })}
      </div>
    );
  }
}

export default CardList;
