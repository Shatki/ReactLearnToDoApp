import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component{
    state = {
        filter: 'all'
        };

    onClickButton = (e) => {
        this.setState({
           filter: e.target.className = "btn btn-info"
        });
        console.log(e.target.className)
    };


    render() {
        return (
            <div className="btn-group">
                <button type="button" key='all'
                        onClick={this.onClickButton}
                        className="btn btn-outline-secondary">All
                </button>
                <button type="button" key='active'
                        onClick={this.onClickButton}
                        className="btn btn-outline-secondary">Active
                </button>
                <button type="button" key='done'
                        onClick={this.onClickButton}
                        className="btn btn-outline-secondary">Done
                </button>
            </div>
        );
    }

}