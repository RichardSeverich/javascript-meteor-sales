import React, { Component } from 'react';
import Logo from './../logo/Logo';
//import logo from './logo.png';
import { withRouter } from 'react-router-dom';
import './NavigationBar.css';

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.navigateUsersShow = this.navigateUsersShow.bind(this);
        this.navigateUsersCreate = this.navigateUsersCreate.bind(this);
        this.navigateCoursesShow = this.navigateCoursesShow.bind(this);
        this.navigateCoursesCreate = this.navigateCoursesCreate.bind(this);
        this.navigateModulesShow = this.navigateModulesShow.bind(this);
        this.navigateModulesCreate = this.navigateModulesCreate.bind(this);
        this.navigateLogin = this.navigateLogin.bind(this);
        this.navigateScoresCreate = this.navigateScoresCreate.bind(this);
        this.navigateScoresShow = this.navigateScoresShow.bind(this);
        this.navigateCounter = this.navigateCounter.bind(this);
        this.navigateCounterRedux = this.navigateCounterRedux.bind(this);
        this.navigateMeteorTodo = this.navigateMeteorTodo.bind(this);
    }
    navigateUsersShow() {
        this.props.history.push('/users-show');
    }
    navigateUsersCreate() {
        this.props.history.push('/users-create');
    }
    navigateCoursesShow() {
        this.props.history.push('/courses-show');
    }
    navigateCoursesCreate() {
        this.props.history.push('/courses-create');
    }
    navigateModulesShow() {
        this.props.history.push('/modules-show');
    }
    navigateModulesCreate() {
        this.props.history.push('/modules-create');
    }
    navigateScoresShow() {
        this.props.history.push('/scores-show');
    }
    navigateScoresCreate() {
        this.props.history.push('/scores-create');
    }
    navigateCounter() {
        this.props.history.push('/counter');
    }
    navigateCounterRedux() {
        this.props.history.push('/counter-redux');
    }
    navigateLogin(){
        this.props.history.push('/login');
    }
    navigateMeteorTodo(){
        this.props.history.push('/todo');
    }
    render() { return (<div>
        <div className='navbar'>
            <div className="ui stackable menu">
                <div className="item">
                    <div className="ui compact menu">
                    <img src="logo/semantic-nav-logo/logo.png" className="App-logo-bar" alt="logo" />
                    </div>
                </div>
                <div className="item">
                    <div className="ui compact menu">
                        <div className="ui simple dropdown item">
                            <i className="user icon"></i>
                            Users
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <div onClick={this.navigateUsersCreate} className="item">Add</div>
                                <div onClick={this.navigateUsersShow} className="item">Show</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="ui compact menu">
                        <div className="ui simple dropdown item">
                            <i className="book icon"></i>
                            Courses
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <div onClick={this.navigateCoursesCreate} className="item">Add</div>
                                <div onClick={this.navigateCoursesShow} className="item">Show</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="ui compact menu">
                        <div className="ui simple dropdown item">
                            <i className="pencil icon"></i>
                            Modules
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <div onClick={this.navigateModulesCreate} className="item">Add</div>
                                <div onClick={this.navigateModulesShow} className="item">Show</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="ui compact menu">
                        <div className="ui simple dropdown item">
                          <i className="lightning icon"></i>
                            Scores
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <div onClick={this.navigateScoresCreate} className="item">Add</div>
                                <div onClick={this.navigateScoresShow} className="item">Show</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="ui compact menu">
                        <div className="ui simple dropdown item">
                            <i className="lightbulb icon"></i>
                            Examples
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <div  onClick={this.navigateCounter} className="item">Counter</div>
                                <div onClick={this.navigateCounterRedux} className="item">Counter Redux</div>
                                <div className="item">Counter Hooks</div>
                                <div className="item">Counter Hooks Redux</div>
                                <div onClick={this.navigateMeteorTodo} className="item">Meteor Todo</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right item">
                    <div className="ui compact menu">
                        <div className="ui simple dropdown item">
                            <i className="setting icon"></i>
                            <div className="menu">
                                <div className="item">Conf</div>
                                <div onClick={this.navigateLogin} className="item">Exit</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Logo></Logo>
    </div>)}
}
export default withRouter(NavigationBar);
