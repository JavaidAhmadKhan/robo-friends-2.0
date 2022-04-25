import { Component } from "react";
import Card from "../Card/Card";

import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters, id } = this.props;

    return (
      <div className="card-list" key={id}>
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
