import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <h1>SearchBox</h1>
        <input
          // these are all props of an input like className, type
        //   className="search-box"
          type="search"
        //   placeholder="search  monster"
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
