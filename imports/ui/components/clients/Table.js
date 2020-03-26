import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import NavigationBar from "./../nav-bar/NavigationBar";
import Row from "./Row.js";
import { Clients } from "../../../api/clients/clients";
import "./Table.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.renderRows = this.renderRows.bind(this);
  }

  renderRows() {
    return this.props.clients.map(client => (
      <Row key={client._id} client={client} />
    ));
  }

  render() {
    return (
      <div>
        <NavigationBar></NavigationBar>
        <div align="center">
          <div className="card-clients">
            <div className="margin-bottom">
              <h3 align="center">Clientes</h3>
            </div>
            <div className="card-body">
              <table className="ui striped selectable celled table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">ci o nit</th>
                    <th scope="col">apellido</th>
                    <th scope="col">fecha (año-mes-dia)</th>
                    <th scope="col">creado por</th>
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
export default withTracker(() => {
  Meteor.subscribe("clients");
  return {
    clients: Clients.find({}).fetch(),
    currentUser: Meteor.user()
  };
})(Table);
