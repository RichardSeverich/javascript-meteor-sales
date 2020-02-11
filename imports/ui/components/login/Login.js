import React, { Component } from 'react';
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
    }
    navigateNavbar() {
        this.props.history.push('/nav-bar');
    }
    render() {
        return ( <div>
            <div className="Login-header"></div>
            <LogoSemantic></LogoSemantic>
            <div className="login-meteor-form" align='center'><AccountsUIWrapper/></div>
            { Meteor.user() ?
            <div className="ui centered grid container">
                <div className="six wide column">
                    <div className="ui fluid card">
                        <div className="content">
                            <form className="ui form">
                                {/* 
                                <div className="field">
                                    <label>User</label>
                                    <div className="ui left icon">
                                        <i className="user icon"></i>
                                        <input type="text" name="user" placeholder="User"></input>
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Password</label>
                                    <div className="ui left icon">
                                        <i className="lock icon"></i>
                                        <input type="password" name="pass" placeholder="Password"></input>
                                    </div>
                                </div>*/}
                                <button onClick={this.navigateNavbar} className="ui basic button labeled icon button" type="submit">
                                    <i className="unlock alternate icon"></i>
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> :''
            }
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
