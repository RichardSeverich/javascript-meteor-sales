import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavigationBar from "./../nav-bar/NavigationBar";

class Form extends Component {
  constructor() {
    super();
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleCreate() {
    // Find the text field via the React ref
    let id = ReactDOM.findDOMNode(this.refs.id).value.trim();
    let nickname = ReactDOM.findDOMNode(this.refs.nickname).value.trim();
    let password = ReactDOM.findDOMNode(this.refs.password).value.trim();
    let name = ReactDOM.findDOMNode(this.refs.name).value.trim();
    let lastName = ReactDOM.findDOMNode(this.refs.lastName).value.trim();
    let email = ReactDOM.findDOMNode(this.refs.email).value.trim();
    let type = ReactDOM.findDOMNode(this.refs.type).value.trim();
    Accounts.createUser({
      username: nickname,
      email: email,
      password: password,
      profile: {
        id: id,
        name: name,
        lastName: lastName,
        type: type
      }
    });
    alert("Exito");
    //Clear Inputs
    ReactDOM.findDOMNode(this.refs.id).value = "";
    ReactDOM.findDOMNode(this.refs.nickname).value = "";
    ReactDOM.findDOMNode(this.refs.password).value = "";
    ReactDOM.findDOMNode(this.refs.name).value = "";
    ReactDOM.findDOMNode(this.refs.lastName).value = "";
    ReactDOM.findDOMNode(this.refs.email).value = "";
  }

  render() {
    return (
      <div>
        <NavigationBar></NavigationBar>
        <div className="ui centered grid container">
          <div className="six wide column">
            <div className="ui fluid card">
              <div className="margin-bottom-one"></div>
              <h3 align="center">Usuarios</h3>
              <div className="margin-bottom-one"></div>
              <div className="content" align="center">
                <form className="ui form">
                  <div className="field">
                    <div className="label">
                      <label>Cedula</label>
                    </div>
                    <input
                      ref="id"
                      type="text"
                      className="form-control"
                      maxLength="7"
                    ></input>
                  </div>
                  <div className="field">
                    <div className="label">
                      <label>Nickname</label>
                    </div>
                    <input
                      ref="nickname"
                      className=""
                      minLength="3"
                      maxLength="10"
                    ></input>
                  </div>
                  <div className="field">
                    <div className="label">
                      <label>Contrasena</label>
                    </div>
                    <input
                      ref="password"
                      type="password"
                      className="form-control"
                      minLength="3"
                      maxLength="10"
                    ></input>
                  </div>
                  <div className="field">
                    <div className="label">
                      <label>Nombres</label>
                    </div>
                    <input
                      ref="name"
                      type="text"
                      className="form-control"
                      minLength="3"
                      maxLength="24"
                    ></input>
                  </div>
                  <div className="field">
                    <div className="label">
                      <label>Apellidos</label>
                    </div>
                    <input
                      ref="lastName"
                      type="text"
                      className="form-control"
                      minLength="3"
                      maxLength="24"
                    ></input>
                  </div>
                  <div className="field">
                    <div className="label">
                      <label>Email</label>
                    </div>
                    <input
                      ref="email"
                      type="text"
                      className="form-control"
                      maxLength="32"
                    ></input>
                  </div>
                  <div className="field">
                    <div className="label">
                      <label>Tipo</label>
                    </div>
                    <select ref="type" className="">
                      <option value="admin">Administrador</option>
                      <option value="saler">Vendedor</option>
                    </select>
                  </div>
                  <div className="field text-center">
                    <button
                      onClick={this.handleCreate.bind(this)}
                      type="button"
                      className="ui basic button"
                    >
                      <i className="save icon"></i>
                      Guardar
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
