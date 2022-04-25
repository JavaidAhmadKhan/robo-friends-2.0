import { Component } from "react";

class SearchBox extends Component {
  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };
  render() {
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
