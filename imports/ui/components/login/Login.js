// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LogoSemantic from './../logo-semantic/LogoSemantic';
import './Login.css';
// User Account
import AccountsUIWrapper from './../../AccountsUIWrapper.js';
// Meteor
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

class Login extends Component{
    constructor(props) {
        super(props);
        this.navigateNavbar = this.navigateNavbar.bind(this);
        this.login = this.login.bind(this);
    }
    navigateNavbar() {
        this.props.history.push('/nav-bar');
    }
    login() {
        let nickname = ReactDOM.findDOMNode(this.refs.nickname).value.trim();
        let password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        let navigate = this.props;
        //Meteor.loginWithPassword(nickname, password);
        Meteor.loginWithPassword(nickname, password, function(error) {
            if (error) {
                alert(error.reason);
            } else {
                navigate.history.push('/nav-bar');
            }
        });
    }
    render() {
        return ( <div>
            <div className="Login-header"></div>
            <LogoSemantic></LogoSemantic>
            <div className="login-meteor-form" align='center'><AccountsUIWrapper/></div>
            <div className="ui centered grid container">
                <div className="six wide column">
                    <div className="ui fluid card">
                        <div className="content">
                            <form className="ui form">
                                <div className="field">
                                    <label>User</label>
                                    <div className="ui left icon">
                                        <i className="user icon"></i>
                                        <input 
                                            ref="nickname"
                                            name="user"
                                            type="text" 
                                            placeholder="User">
                                        </input>
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Password</label>
                                    <div className="ui left icon">
                                        <i className="lock icon"></i>
                                        <input 
                                            ref="password" 
                                            name="pass"
                                            type="password" 
                                            placeholder="Password">                                         
                                        </input>
                                    </div>
                                </div>
                                <button 
                                    onClick={this.login} 
                                    className="ui basic button labeled icon button"
                                    type="button">
                                    <i className="unlock alternate icon"></i>
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </div> )
    }
}
// export default Login;
// withTracker is a function that accepts other function
export default withTracker(() => {
    return {
        currentUser: Meteor.user()
    };
})(Login);
