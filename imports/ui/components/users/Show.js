import React, { Component } from 'react';
import { users } from './../../mock-data/users.json';
import NavigationBar from './../nav-bar/NavigationBar';
import './Show.css';

class Show extends Component {

    constructor(){
        super();
        this.state = {
            users
        }
        this.delete = this.delete.bind(this);
    }
    delete(_id) {
        this.setState({
            users: this.state.users.filter((element, index) => {
                return element._id !== _id;
            })
        })
        alert("deleted successfully");
    }
    render() {
        const rows = this.state.users.map((user, i) => {
            let _id = user._id;
            return (
                <tr key={user._id}>
                    <td scope="col"><input type="checkbox"></input></td>
                    <td scope="col">{user._id}</td>
                    <td scope="col">{user.nick_name}</td>
                    <td scope="col">{user.password}</td>
                    <td scope="col">{user.name}</td>
                    <td scope="col">{user.last_name}</td>
                    <td scope="col">{user.career}</td>
                    <td scope="col">{user.email}</td>
                    <td scope="col">{user.type}</td>
                    <td scope="col"> 
                        <button className="ui basic button">
                            <i className="edit icon"></i>
                            Edit
                        </button>
                    </td>
                    <td scope="col">
                        <button onClick={this.delete.bind(this, _id)} className="ui basic button">
                            <i className="remove sign icon"></i>
                            Delete
                        </button>
                    </td>
                </tr>
            )
        })
        return (
            <div>
                <NavigationBar></NavigationBar>
                <div align="center">
                    <div className="card-users">
                        <div className="margin-bottom">
                            <h3 align="center">
                                Users
                            </h3>
                        </div>
                        <div className="card-body">
                            <table className="ui striped selectable celled table">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">_id</th>
                                        <th scope="col">nick name</th>
                                        <th scope="col">password</th>
                                        <th scope="col">name</th>
                                        <th scope="col">last name</th>
                                        <th scope="col">career</th>
                                        <th scope="col">email</th>
                                        <th scope="col">type</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Show;
