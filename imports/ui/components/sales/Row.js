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
    let item = this.props.sale;
    let date =
      item.createdAt.getFullYear() +
      "-" +
      item.createdAt.getMonth() +
      "-" +
      item.createdAt.getDate();
    return (
      <tr>
        <td scope="col">
          <input type="checkbox"></input>
        </td>
        <td scope="col">{item.client_id_card}</td>
        <td scope="col">{item.client_name}</td>
        <td scope="col">{date}</td>
        <td scope="col">{item.username}</td>
        <td scope="col">
          <button className="ui basic button">
            <i className="cart plus icon"></i>
            Registrar
          </button>
        </td>
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
