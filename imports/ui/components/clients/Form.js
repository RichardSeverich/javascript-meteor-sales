import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import NavigationBar from "./../nav-bar/NavigationBar";

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleCreate(event) {
    event.preventDefault();
    // Find the text field via the React ref
    let idCard = ReactDOM.findDOMNode(this.refs.idCard).value.trim();
    let name = ReactDOM.findDOMNode(this.refs.name).value.trim();
    let client = {
      idCard: parseInt(idCard),
      name
    };
    Meteor.call("clientMethods.insert", client, function(error, result) {
      if (error) {
        alert(error);
      } else {
        alert("Exito");
      }
    });
    ReactDOM.findDOMNode(this.refs.idCard).value = "";
    ReactDOM.findDOMNode(this.refs.name).value = "";
  }

  render() {
    return (
      <div>
        <NavigationBar></NavigationBar>
        <div className="ui centered grid container">
          <div className="six wide column">
            <div className="ui fluid card">
              <div className="margin-bottom-one"></div>
              <h3 align="center">Clientes</h3>
              <div className="margin-bottom-one"></div>
              <div className="content" align="center">
                <form action="" className="ui form">
                  <div className="field">
                    <label>Nit o CI</label>
                    <input
                      ref="idCard"
                      type="number"
                      className="form-control"
                      min="1"
                    ></input>
                  </div>
                  <div className="field">
                    <label>Apellido</label>
                    <input
                      ref="name"
                      type="text"
                      className="form-control"
                      minLength="3"
                      maxLength="24"
                    ></input>
                  </div>
                  <div className="field text-center">
                    <button
                      onClick={this.handleCreate.bind(this)}
                      type="button"
                      className="ui basic button"
                    >
                      <i className="save icon"></i>Guardar
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
