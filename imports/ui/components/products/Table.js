import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import NavigationBar from "./../nav-bar/NavigationBar";
import Row from "./Row.js";
import { Products } from "../../../api/products/products";
import { productsMock } from "./../../mock-data/products.json";
import "./Table.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.renderRows = this.renderRows.bind(this);
  }

  renderRows() {
    return this.props.products.map(product => (
      <Row key={product._id} product={product} />
    ));
  }

  render() {
    return (
      <div>
        <NavigationBar></NavigationBar>
        <div align="center">
          <div className="card-products">
            <div className="margin-bottom">
              <h3 align="center">Productos</h3>
            </div>
            <div className="card-body">
              <table className="ui striped selectable celled table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Fecha (Año-Mes-Dia)</th>
                    <th scope="col">Creado por</th>
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
  Meteor.subscribe("products");
  return {
    products: Products.find({}).fetch(),
    currentUser: Meteor.user()
  };
})(Table);
