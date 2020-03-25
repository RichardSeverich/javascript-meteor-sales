// React
import React, { Component } from "react";
// React DOM
import ReactDOM from "react-dom";
// Meteor
import { Meteor } from "meteor/meteor";
// Others
import NavigationBar from "./../nav-bar/NavigationBar";

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleCreate(event) {
    event.preventDefault();
    // Find the text field via the React ref
    let name = ReactDOM.findDOMNode(this.refs.name).value.trim();
    let price = ReactDOM.findDOMNode(this.refs.price).value.trim();
    let quantity = ReactDOM.findDOMNode(this.refs.quantity).value.trim();
    let product = {
      name,
      price: parseInt(price),
      quantity: parseInt(quantity)
    };
    Meteor.call("productMethods.insert", product, function(error, result) {
      if (error) {
        alert(error);
      } else {
        alert("Exito");
        //Clear Inputs
      }
    });
    ReactDOM.findDOMNode(this.refs.name).value = "";
    ReactDOM.findDOMNode(this.refs.price).value = "";
    ReactDOM.findDOMNode(this.refs.quantity).value = "";
  }

  render() {
    return (
      <div>
        <NavigationBar></NavigationBar>
        <div className="ui centered grid container">
          <div className="six wide column">
            <div className="ui fluid card">
              <div className="margin-bottom-one"></div>
              <h3 align="center">Productos</h3>
              <div className="margin-bottom-one"></div>
              <div className="content" align="center">
                <form action="" className="ui form">
                  <div className="field">
                    <label>Name</label>
                    <input
                      ref="name"
                      type="text"
                      className="form-control"
                      minLength="3"
                      maxLength="24"
                    ></input>
                  </div>
                  <div className="field">
                    <label>Precio</label>
                    <input
                      ref="price"
                      type="number"
                      className="form-control"
                      min="1"
                      max="1000"
                    ></input>
                  </div>
                  <div className="field">
                    <label>Cantidad</label>
                    <input
                      ref="quantity"
                      type="number"
                      className="form-control"
                      min="1"
                      max="1000"
                    ></input>
                  </div>
                  <div className="field text-center">
                    <button
                      onClick={this.handleCreate.bind(this)}
                      type="button"
                      className="ui basic button"
                    >
                      <i className="save icon"></i>Registrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;
