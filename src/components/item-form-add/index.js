import React, { Component} from 'react'
import './style.css'


export default class AddTagPanel extends Component {

    render() {
        const { onItemAdd } = this.props;

        return (
            <div className="item-add-form input-group mb-3">
                <input type="text"
                       className="form-control"
                       aria-describedby="button-add"
                       placeholder="enter a new tag"/>
                <div className="input-group-append">
                    <button className="btn btn-secondary"
                            type="button"
                            onClick={onItemAdd}
                            id="button-add">Add</button>
                </div>
            </div>
        )
    }
}
