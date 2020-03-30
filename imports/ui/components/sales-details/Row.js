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
    let item = this.props.product;
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
        <td scope="col">{item.name}</td>
        <td scope="col">{item.price}</td>
        <td scope="col">{item.quantitySold}</td>
        <td scope="col">{date}</td>
        <td scope="col">{item.username}</td>
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
