import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { searchfield, searchChange } = this.props;
    return (
      <div>
        <h1>SearchBox</h1>
        <input
          // these are all props of an input like className, type
          className="search-box"
          type="search"
          placeholder="search  monster"
          onChange={onSearchChange}
        />
      </div>
    );
  }
}

export default SearchBox;
