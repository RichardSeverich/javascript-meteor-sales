import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import NavigationBar from "./../nav-bar/NavigationBar";
import Row from "./Row.js";
import { Products } from "../../../api/products/products";
import { SalesProducts } from "../../../api/sales-products/salesProducts";
import "./../products/Table.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.renderRows = this.renderRows.bind(this);
    this.getSoldProducts = this.getSoldProducts.bind(this);
  }

  getSoldProducts(sale) {
    let salesProducts = this.props.salesProducs;
    let products = this.props.products;
    let total = 0;
    let salesProductsSpecific = salesProducts.filter(element => {
      return element.sale_id === sale._id;
    });
    let finalProductsSold = [];
    salesProductsSpecific.forEach(function(elementSaleProduct) {
      let productSold = products.find(
        elementProduct => elementProduct._id === elementSaleProduct.product_id
      );
      let totalOneProduct =
        parseInt(elementSaleProduct.quantity) * parseInt(productSold.price);
      productSold.quantitySold = elementSaleProduct.quantity;
      productSold.saleProductId = elementSaleProduct._id;
      finalProductsSold.push(productSold);
      total = total + totalOneProduct;
    });
    return { finalProductsSold, total };
  }

  renderRows(finalProductsSold) {
    return finalProductsSold.map(product => (
      <Row key={product._id} product={product} />
    ));
  }

  render() {
    let sale = this.props.location.sale;
    let { finalProductsSold, total } = this.getSoldProducts(sale);
    return (
      <div>
        <NavigationBar></NavigationBar>
        <div align="center">
          <div className="card-products">
            <div className="margin-bottom">
              <h3 align="center">Ventas</h3>
              <h4 align="center">Cliente Nit: {sale.client_id_card}</h4>
              <h4 align="center">Cliente Apellido: {sale.client_name}</h4>
              <h4 align="center">Total Pagar: {total}</h4>
            </div>
            <div className="card-body">
              <table className="ui striped selectable celled table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">nombre</th>
                    <th scope="col">precio</th>
                    <th scope="col">cantidad vendida</th>
                    <th style={{ maxWidth: "120px" }} scope="col">
                      fecha Creacion/Edicion (año-mes-dia)
                    </th>
                    <th style={{ maxWidth: "90px" }} scope="col">
                      Creado / Editado por
                    </th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>{this.renderRows(finalProductsSold)}</tbody>
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
  Meteor.subscribe("salesProducts");
  return {
    products: Products.find({}).fetch(),
    currentUser: Meteor.user(),
    salesProducs: SalesProducts.find({}).fetch(),
    currentUser: Meteor.user()
  };
})(Table);
