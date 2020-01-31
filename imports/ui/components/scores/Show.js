import React, { Component } from 'react';
import { scores } from './../../mock-data/scores.json';
import NavigationBar from './../nav-bar/NavigationBar';
import './Show.css';

class Show extends Component{
    constructor(){
        super();
        this.state = {
            scores
        }
    }
    render() {
        const rows = this.state.scores.map((score, i) => {
            return (
                <tr key={score._id}>
                    <td scope="col"><input type="checkbox"></input></td>
                    <td scope="col">{score.id_user}</td>
                    <td scope="col">{score.user_name}</td>
                    <td scope="col">{score.user_last_name}</td>
                    <td scope="col">{score.module_name}</td>
                    <td scope="col">{score.value}</td>
                    <td scope="col"> 
                        <button className="ui basic button">
                            <i className="edit icon"></i>
                            Edit
                        </button>
                    </td>
                    <td scope="col"> 
                        <button className="ui basic button">
                            <i className="remove sign icon"></i>
                            Delete
                        </button> 
                    </td>
                </tr>
            )
        } )
        return ( <div>
            <NavigationBar></NavigationBar>
            <div align="center">
                <div className="card card-scores">
                    <div className="margin-bottom">
                        <h3 align="center">Scores</h3>
                    </div>
                    <div className="card-body">
                        <table className="ui striped selectable celled table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">id user</th>
                                    <th scope="col">user name</th>
                                    <th scope="col">user last name</th>
                                    <th scope="col">module name</th>
                                    <th scope="col">value</th>
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
        </div> )
    }
}
export default Show;
