import React from 'react';
class Search extends React.Component {
  state = {
    search: '',
    type: '',
  };
  handleSearchChange = e => {
    this.setState({ search: e.target.value });
  };

  handleKey = event => {
    if (event.key === 'Enter')
      this.props.cb(this.state.search, this.state.type);
  };
  handleTypeChange = e => {
    this.setState(
      () => ({ type: e.target.value }),
      () => {
        this.props.cb(this.state.search, this.state.type);
      },
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            id="search"
            type="search"
            className="validate"
            value={this.state.search}
            placeholder="Search"
            onChange={this.handleSearchChange}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() => this.props.cb(this.state.search, this.state.type)}
          >
            Search
          </button>
        </div>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            value=""
            onChange={this.handleTypeChange}
            checked={this.state.type === ''}
          />
          <span>Select All</span>
        </label>

        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            value="movie"
            onChange={this.handleTypeChange}
            checked={this.state.type === 'movie'}
          />
          <span>Movies Only</span>
        </label>

        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            value="series"
            onChange={this.handleTypeChange}
            checked={this.state.type === 'series'}
          />
          <span>Series Only</span>
        </label>
      </div>
    );
  }
}
export { Search };
