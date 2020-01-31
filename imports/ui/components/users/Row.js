import React, { Component } from 'react';
// Mongo
import { Users } from '../../../api/users';

class Row extends Component {

    constructor(){
        super();
        this.delete = this.delete.bind(this);
    }

    delete(_id) {
        Users.remove(_id);
        alert("deleted successfully");
    }
    render() {
        return (
                <tr>
                    <td scope="col"><input type="checkbox"></input></td>
                    <td scope="col">{this.props.user.id}</td>
                    <td scope="col">{this.props.user.nickname}</td>
                    <td scope="col">{this.props.user.password}</td>
                    <td scope="col">{this.props.user.name}</td>
                    <td scope="col">{this.props.user.lastName}</td>
                    <td scope="col">{this.props.user.career}</td>
                    <td scope="col">{this.props.user.email}</td>
                    <td scope="col">{this.props.user.type}</td>
                    <td scope="col"> 
                        <button className="ui basic button">
                            <i className="edit icon"></i>
                            Edit
                        </button>
                    </td>
                    <td scope="col">
                        <button onClick={this.delete.bind(this, this.props.user._id)} className="ui basic button">
                            <i className="remove sign icon"></i>
                            Delete
                        </button>
                    </td>
                </tr>
        )
    }
}
export default Row;
