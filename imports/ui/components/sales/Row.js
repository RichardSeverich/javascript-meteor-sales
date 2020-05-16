import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Row extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.navigateAddProducts = this.navigateAddProducts.bind(this);
    this.edit = this.edit.bind(this);
  }

  delete(id) {
    Meteor.call("saleMethods.remove", id, function(error, result) {
      if (error) {
        alert(error);
      } else {
        if (result) {
          alert("borrado exitosamente");
        } else {
          alert("venta tiene productos vendidos");
        }
      }
    });
  }

  edit(sale) {
    this.props.history.push({
      pathname: "/sales-form",
      sale: sale
    });
  }

  navigateAddProducts(item) {
    this.props.history.push({
      pathname: "/sales-table-products",
      sale: item
    });
  }

  navigateDetails(item) {
    this.props.history.push({
      pathname: "/sales-table-details",
      sale: item
    });
  }

  render() {
    let item = this.props.sale;
    let date =
      item.createdAt.getFullYear() +
      "-" +
      item.createdAt.getMonth() +
      "-" +
      item.createdAt.getDate();
    item.date = date;
    return (
      <tr>
        <td scope="col">
          <input type="checkbox"></input>
        </td>
        <td scope="col">{item.client_id_card}</td>
        <td scope="col">{item.client_name}</td>
        <td scope="col">{item.date}</td>
        <td scope="col">{item.username}</td>
        <td scope="col">
          <button
            onClick={this.navigateAddProducts.bind(this, item)}
            className="ui basic button"
          >
            <i className="cart plus icon"></i>
            Productos
          </button>
        </td>
        <td scope="col">
          <button
            onClick={this.navigateDetails.bind(this, item)}
            className="ui basic button"
          >
            <i className="search plus icon"></i>
            Detalle
          </button>
        </td>
        <td scope="col">
          <button
            onClick={this.edit.bind(this, item)}
            className="ui basic button"
          >
            <i className="edit icon"></i>
            Editar
          </button>
        </td>
        <td scope="col">
          <button
            onClick={this.delete.bind(this, item._id)}
            className="ui basic button"
          >
            <i className="trash alternate outline icon"></i>
            Eliminar
          </button>
        </td>
      </tr>
    );
  }
}
export default withRouter(Row);
