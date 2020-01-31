
import React, { Component } from 'react';
import NavigationBar from './../nav-bar/NavigationBar';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        });
    };
    decrement() {
        this.setState({
            count: this.state.count - 1
        });
    };
    reset() {
        this.setState({
            count: 0
        });
    };
    render() {
        return (<div>
            <NavigationBar></NavigationBar>
            <div className="ui centered grid container">
                <div className="six wide column">
                    <div className="ui fluid card">
                        <div className="margin-bottom-one"></div>
                            <h3 align="center">Counter: {this.state.count}</h3>
                        <div className="margin-bottom-one"></div>
                        <div className="content" align="center">
                            <form className="ui form">
                                <div className="text-center">
                                    <button type="button" className='ui basic button' onClick={this.increment}>Increment!</button>
                                    <button type="button" className='ui basic button' onClick={this.decrement}>Decrement!</button>
                                    <button type="button" className='ui basic button' onClick={this.reset}>Reset</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
};

export default Counter;
