import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import NavigationBar from "./../nav-bar/NavigationBar";
import Row from "./Row.js";
import { Sales } from "../../../api/sales/sales";
import "./Table.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.renderRows = this.renderRows.bind(this);
  }

  renderRows() {
    return this.props.sales.map(sale => <Row key={sale._id} sale={sale} />);
  }

  render() {
    return (
      <div>
        <NavigationBar></NavigationBar>
        <div align="center">
          <div className="card-sales">
            <div className="margin-bottom">
              <h3 align="center">Sales</h3>
            </div>
            <div className="card-body">
              <table className="ui striped selectable celled table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">CI o NIT</th>
                    <th scope="col">apellido</th>
                    <th scope="col">Fecha (Año-Mes-Dia)</th>
                    <th scope="col">Creado por</th>
                    <th scope="col"></th>
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
  Meteor.subscribe("sales");
  return {
    sales: Sales.find({}).fetch(),
    currentUser: Meteor.user()
  };
})(Table);
