import React, { Component } from "react";

class Row extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete(_id) {
    alert("deleted successfully");
  }

  render() {
    return (
      <tr>
        <td scope="col">
          <input type="checkbox"></input>
        </td>
        <td scope="col">{this.props.product.name}</td>
        <td scope="col">{this.props.product.price}</td>
        <td scope="col">{this.props.product.quantity}</td>
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
  }
}
export default Row;
