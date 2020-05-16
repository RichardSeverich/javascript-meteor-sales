import React, { Component } from "react";
import ReactDOM from "react-dom";

class Row extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleCreate(event) {
    event.preventDefault();
    // Find the text field via the React ref
    let quantity = ReactDOM.findDOMNode(this.refs.quantity).value.trim();
    let saleProduct = {
      sale_id: this.props.sale._id,
      product_id: this.props.product._id,
      quantity: parseInt(quantity)
    };
    Meteor.call("saleProductMethods.insert", saleProduct, function(
      error,
      result
    ) {
      if (error) {
        alert(error);
      } else {
        alert("Exito");
      }
    });
    ReactDOM.findDOMNode(this.refs.quantity).value = "";
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
        <td scope="col">{item.quantity}</td>
        <td scope="col">
          <input
            ref="quantity"
            type="number"
            className="form-control"
            min="1"
            max="1000"
          ></input>
        </td>
        <td scope="col">
          <button
            onClick={this.handleCreate.bind(this)}
            className="ui basic button"
          >
            <i className="save icon"></i>
            Guardar
          </button>
        </td>
      </tr>
    );
  }
}
export default Row;
