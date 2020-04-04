import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import NavigationBar from "./../nav-bar/NavigationBar";
import Row from "./Row.js";
import { Sales } from "../../../api/sales/sales";
import { Clients } from "../../../api/clients/clients";
import "./Table.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.getSales = this.getSales.bind(this);
    this.renderRows = this.renderRows.bind(this);
  }

  getSales() {
    let sales = this.props.sales;
    let clients = this.props.clients;
    let finalSales = [];
    sales.forEach(function(elementSale) {
      let client = clients.find(
        elementClient => elementClient._id === elementSale.client_id
      );
      // This is in order to control Async.
      if (client) {
        elementSale.client_id_card = client.id_card;
        elementSale.client_name = client.name;
      }
      finalSales.push(elementSale);
    });
    return { finalSales };
  }

  renderRows(finalSales) {
    return finalSales.map(sale => <Row key={sale._id} sale={sale} />);
  }

  render() {
    let { finalSales } = this.getSales();
    return (
      <div>
        <NavigationBar></NavigationBar>
        <div align="center">
          <div className="card-sales">
            <div className="margin-bottom">
              <h3 align="center">Ventas</h3>
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
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>{this.renderRows(finalSales)}</tbody>
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
  Meteor.subscribe("clients");
  return {
    sales: Sales.find({}).fetch(),
    currentUser: Meteor.user(),
    clients: Clients.find().fetch(),
    currentUser: Meteor.user()
  };
})(Table);
