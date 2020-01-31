import React, { Component } from 'react';
import { courses } from './../../mock-data/courses.json';
import NavigationBar from './../nav-bar/NavigationBar';
import './Show.css';

class Show extends Component{
    constructor(){
        super();
        this.state = {
            courses
        }
    }
    render() {
        const rows = this.state.courses.map((course, i) => {
            return (
                <tr key={course._id}>
                    <td scope="col"><input type="checkbox"></input></td>
                    <td scope="col">{course._id}</td>
                    <td scope="col">{course.name}</td>
                    <td scope="col"> 
                        <button className="ui basic button">Details</button> 
                    </td>
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
        })
        return ( <div>
            <NavigationBar></NavigationBar>
            <div align="center">
                <div className="card-courses">
                    <div className="margin-bottom">
                        <h3 align="center">Courses</h3>
                    </div>
                    <div className="card-body">
                        <table className="ui striped selectable celled table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">_id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col"></th>
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
