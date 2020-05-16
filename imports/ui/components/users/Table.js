// React
import React, { Component } from "react";
// Meteor
import { withTracker } from "meteor/react-meteor-data";
// Others
import NavigationBar from "./../nav-bar/NavigationBar";
import Row from "./Row.js";
import "./Table.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.renderRows = this.renderRows.bind(this);
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
              <h3 align="center">Usuarios</h3>
            </div>
            <div className="card-body">
              <table className="ui striped selectable celled table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">cedula</th>
                    <th scope="col">nickname</th>
                    <th scope="col">contrasena</th>
                    <th scope="col">nombres</th>
                    <th scope="col">apellidos</th>
                    <th scope="col">email</th>
                    <th scope="col">tipo</th>
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
  return {
    users: Meteor.users.find({}) //only currently user.
  };
})(Table);
