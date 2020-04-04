import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import NavigationBar from "./../nav-bar/NavigationBar";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { client: this.props.location.client };
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleCreate() {
    //event.preventDefault();
    // Find the text field via the React ref
    let idCard = ReactDOM.findDOMNode(this.refs.idCard).value.trim();
    let name = ReactDOM.findDOMNode(this.refs.name).value.trim();
    let client = {
      idCard: parseInt(idCard),
      name
    };
    if (this.state.client) {
      client._id = this.state.client._id;
      this.setState({ client: undefined });
    }
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
    let client = this.props.location.client;
    if (!client) {
      client = { id_card: "", name: "" };
    }
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
                      defaultValue={client.id_card}
                      type="number"
                      className="form-control"
                      min="1"
                    ></input>
                  </div>
                  <div className="field">
                    <label>Apellido</label>
                    <input
                      ref="name"
                      defaultValue={client.name}
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
                      s
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
