// React
import React, { Component } from "react";

// Meteor
import { withTracker } from "meteor/react-meteor-data";

// Mongo
import { Users } from "../../../api/users";

// Others
//import { users } from './../../mock-data/users.json';
import NavigationBar from "./../nav-bar/NavigationBar";
import Row from "./Row.js";
import "./Show.css";

class Show extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.renderRows = this.renderRows.bind(this);
  }
  delete(_id) {
    this.setState({
      users: this.state.users.filter((element, index) => {
        return element._id !== _id;
      })
    });
    alert("deleted successfully");
  }

  renderRows() {
    return this.props.users.map(user => <Row key={user._id} user={user} />);
  }
  render() {
    return (
      <div>
        <NavigationBar></NavigationBar>
        <div align="center">
          <div className="card-users">
            <div className="margin-bottom">
              <h3 align="center">Users</h3>
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
                <tbody>{this.renderRows()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//export default Show;
// withTracker is a function that accepts other function
export default withTracker(() => {
  Meteor.subscribe("userMethods"); // this should be the same taskMethods line 8
  return {
    // return Users from mongo db
    users: Meteor.users.find({}) //only currently user.
  };
})(Show);
