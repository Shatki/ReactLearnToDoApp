import React, { Component} from 'react'
import './style.css'


export default class AddTagPanel extends Component {
    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({label: e.target.value})
        };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdd(this.state.label);
        this.setState({
            label: ""
        })
    };

    render() {
        //const { onItemAdd } = this.props;
        return (
            <form className="item-add-form input-group mb-3"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control"
                       aria-describedby="button-add"
                       onChange={this.onLabelChange}
                       value={this.state.label}
                       placeholder="What needs to be done?"/>
                <div className="input-group-append">
                    <button className="btn btn-secondary">
                        Add Item</button>
                </div>
            </form>
        )
    }
}
