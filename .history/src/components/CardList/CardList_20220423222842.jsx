import { Component } from "react";
import Card from "../Card/Card";

import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    const { id, name, email } = this.props.monster;
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
