import React, { Component } from "react";
import { products } from "./../../mock-data/products.json";
import NavigationBar from "./../nav-bar/NavigationBar";
import "./Show.css";

class Show extends Component {
  constructor() {
    super();
    this.state = {
      products
    };
  }
  render() {
    const rows = this.state.products.map((product, i) => {
      return (
        <tr key={product._id}>
          <td scope="col">
            <input type="checkbox"></input>
          </td>
          <td scope="col">{product._id}</td>
          <td scope="col">{product.name}</td>
          <td scope="col">{product.price}</td>
          <td scope="col">{product.quantity}</td>
          <td scope="col">
            <button className="ui basic button">
              <i className="edit icon"></i>
              Editar
            </button>
          </td>
          <td scope="col">
            <button className="ui basic button">
              <i className="trash alternate outline icon"></i>
              Eliminar
            </button>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <NavigationBar></NavigationBar>
        <div align="center">
          <div className="card-courses">
            <div className="margin-bottom">
              <h3 align="center">Productos</h3>
            </div>
            <div className="card-body">
              <table className="ui striped selectable celled table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">_id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Show;
