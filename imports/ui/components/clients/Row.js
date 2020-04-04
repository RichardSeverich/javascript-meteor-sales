import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Row extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
  }

  delete(id) {
    Meteor.call("clientMethods.remove", id, function(error, result) {
      if (error) {
        alert(error);
      } else {
        if (result) {
          alert("borrado exitosamente");
        } else {
          alert("cliente tiene ventas");
        }
      }
    });
  }

  edit(client) {
    this.props.history.push({
      pathname: "/clients-form",
      client: client
    });
  }

  render() {
    let item = this.props.client;
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
        <td scope="col">{item.id_card}</td>
        <td scope="col">{item.name}</td>
        <td scope="col">{date}</td>
        <td scope="col">{item.username}</td>
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
