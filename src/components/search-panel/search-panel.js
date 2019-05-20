import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  onTypeToSearch = (e) => {

  };

  render() {
    return (
        <input type="text"
               onClick={this.onTypeToSearch}
               className="form-control search-input"
               placeholder="type to search"/>
    );
  }
};
