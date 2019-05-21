import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    term: ''
  };

  onChangeSearch = (e) =>{
    const term = e.target.value;
    this.setState({term});
    this.props.onStringFilter(term);
  };

  render() {
    return (
        <input type="text"
               onChange={this.onChangeSearch}
               className="form-control search-input"
               placeholder="type to search"/>
    );
  }
};
