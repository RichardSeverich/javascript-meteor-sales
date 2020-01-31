import React, { Component } from 'react';
import NavigationBar from './../nav-bar/NavigationBar';
import './Create.css';

class Create extends Component{
    constructor(){
        super();
    }
    render() {
        return ( <div>
            <NavigationBar></NavigationBar>
            <div className="ui centered grid container">
                <div className="six wide column">
                    <div className="ui fluid card">
                        <div className="margin-bottom-one"></div>
                            <h3 align="center">Modules</h3>
                        <div className="margin-bottom-one"></div>
                        <div className="content" align="center">
                            <form action="" className="ui form">
                                <div className="field">
                                    <label>Name</label>
                                    <input type="text" className="form-control" minLength="3" maxLength="24"></input>
                                </div>
                                <div className="text-center">
                                   <button type="button" className="ui basic button">
                                      <i className="save icon"></i>Add
                                    </button>
                                    <button type="button" className="ui basic button">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}
export default Create;
