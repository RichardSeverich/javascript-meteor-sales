import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import NavigationBar from "./../nav-bar/NavigationBar";
import Row from "./Row.js";
import { Products } from "../../../api/products/products";
import { productsMock } from "./../../mock-data/products.json";
import "./../products/Table.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.renderRows = this.renderRows.bind(this);
  }

  renderRows() {
    let filteredProducts = this.props.products.map(
      product => products._id == this.props.sale_id_products
    );

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
              <h3 align="center">Ventas</h3>
              <h4 align="center">Nit: {this.props.sale.id_card}</h4>
              <h4 align="center">Cliente: {this.props.sale.name}</h4>
            </div>
            <div className="card-body">
              <table className="ui striped selectable celled table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">nombre</th>
                    <th scope="col">precio</th>
                    <th scope="col">cantidad</th>
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
  Meteor.subscribe("products");
  return {
    products: Products.find({}).fetch(),
    currentUser: Meteor.user()
  };
})(Table);
