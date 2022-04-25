import { Component } from "react";

class CardList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Hello I m Card List Component</h1>
      </div>
    );
  }
}

export default CardList;
