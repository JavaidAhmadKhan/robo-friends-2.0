import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <h1>SearchBox</h1>
        <input
          // these are all props of an input like className, type
            className={this.props.className}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
