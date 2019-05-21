import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component{
    state = {
        filter: 'all'
        };
    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ];

    onClickButton = (event) => {
        this.props.onStatusFilter(event.target.name);
        //console.log(event.target.name);
        this.setState({
           filter: event.target.name
        });
    };


    render() {
        const { filter } = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const buttonClass = filter === name ?
                'btn-info':
                'btn-outline-secondary';
            return(
                <button type="button"
                        name={name}
                        key={name}
                        onClick={this.onClickButton}
                        className={`btn ${buttonClass}`}>{label}
                </button>)
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }

}