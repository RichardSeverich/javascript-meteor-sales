
import React, { Component } from 'react';
import NavigationBar from './../nav-bar/NavigationBar';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }
    render() {
        const {counter,increment,decrement,reset} = this.props;
        return (<div>
            <NavigationBar></NavigationBar>
            <div className="ui centered grid container">
                <div className="six wide column">
                    <div className="ui fluid card">
                        <div className="margin-bottom-one"></div>
                            <h3 align="center">Counter Redux: {counter}</h3>
                        <div className="margin-bottom-one"></div>
                        <div className="content" align="center">
                            <form className="ui form">
                                <div className="text-center">
                                    <button type="button" className='ui basic button' onClick={increment}>Increment!</button>
                                    <button type="button" className='ui basic button' onClick={decrement}>Decrement!</button>
                                    <button type="button" className='ui basic button' onClick={reset}>Reset</button>
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
