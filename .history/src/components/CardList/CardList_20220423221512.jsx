import { Component } from "react";
import Card from "../Card/Card";

import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters, id } = this.props;
    return (
      <div className="card-list" >
        {monsters.map((monster) => {
          return <Card monster={monster} key={this.props.id} />;
        })}
      </div>
    );
  }
}

export default CardList;
