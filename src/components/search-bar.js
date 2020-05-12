import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchText: "",
      placeHolder: "Tapez le nom de votre film..."
    };
  }

  handleChange(event) {
    this.setState({ searchText: event.target.value });
  }

  handleClick(event) {
    this.props.callback(this.state.searchText);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8 input-group">
          <input
            type="text"
            className="form-control imput-lg"
            onChange={this.handleChange}
            placeholder={this.state.placeHolder}
          />
          <span className="input-group-btn">
            <button
              className="btn btn-secondary"
              onClick={this.handleClick.bind(this)}
            >
              GO
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default SearchBar;
