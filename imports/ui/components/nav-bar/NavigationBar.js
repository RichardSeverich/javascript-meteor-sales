import React, { Component } from "react";
import Logo from "./../logo/Logo";
//import logo from './logo.png';
import { withRouter } from "react-router-dom";
import "./NavigationBar.css";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.navigateUsersTable = this.navigateUsersTable.bind(this);
    this.navigateUsersForm = this.navigateUsersForm.bind(this);
    this.navigateClientsForm = this.navigateClientsForm.bind(this);
    this.navigateClientsTable = this.navigateClientsTable.bind(this);
    this.navigateProductsTable = this.navigateProductsTable.bind(this);
    this.navigateProductsForm = this.navigateProductsForm.bind(this);
    this.navigateLogin = this.navigateLogin.bind(this);
    this.navigateMeteorTodo = this.navigateMeteorTodo.bind(this);
  }
  navigateUsersTable() {
    this.props.history.push("/users-form");
  }
  navigateUsersForm() {
    this.props.history.push("/users-table");
  }
  navigateClientsTable() {
    this.props.history.push("/clients-table");
  }
  navigateClientsForm() {
    this.props.history.push("/clients-form");
  }
  navigateProductsTable() {
    this.props.history.push("/products-table");
  }
  navigateProductsForm() {
    this.props.history.push("/products-form");
  }
  navigateSalesTable() {
    this.props.history.push("/sales-table");
  }
  navigateSalesForm() {
    this.props.history.push("/sales-form");
  }
  navigateLogin() {
    this.props.history.push("/login");
  }
  navigateMeteorTodo() {
    this.props.history.push("/todo");
  }
  render() {
    return (
      <div>
        <div className="navbar">
          <div className="ui stackable menu">
            <div className="item">
              <div className="ui compact menu">
                <img
                  src="logo/semantic-nav-logo/logo.png"
                  className="App-logo-bar"
                  alt="logo"
                />
              </div>
            </div>
            <div className="item">
              <div className="ui compact menu">
                <div className="ui simple dropdown item">
                  <i className="user icon"></i>
                  Usuarios
                  <i className="dropdown icon"></i>
                  <div className="menu">
                    <div onClick={this.navigateUsersForm} className="item">
                      Registrar
                    </div>
                    <div onClick={this.navigateUsersTable} className="item">
                      Mostrar
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="ui compact menu">
                <div className="ui simple dropdown item">
                  <i className="users icon"></i>
                  Clientes
                  <i className="dropdown icon"></i>
                  <div className="menu">
                    <div onClick={this.navigateClientsForm} className="item">
                      Registrar
                    </div>
                    <div onClick={this.navigateClientsTable} className="item">
                      Mostrar
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="ui compact menu">
                <div className="ui simple dropdown item">
                  <i className="archive icon"></i>
                  Productos
                  <i className="dropdown icon"></i>
                  <div className="menu">
                    <div onClick={this.navigateProductsForm} className="item">
                      Registrar
                    </div>
                    <div onClick={this.navigateProductsTable} className="item">
                      Mostrar
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="ui compact menu">
                <div className="ui simple dropdown item">
                  <i className="shopping cart icon"></i>
                  Ventas
                  <i className="dropdown icon"></i>
                  <div className="menu">
                    <div onClick={this.navigateSalesForm} className="item">
                      Registrar
                    </div>
                    <div onClick={this.navigateSalesTable} className="item">
                      Mostrar
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="ui compact menu">
                <div className="ui simple dropdown item">
                  <i className="file alternate icon"></i>
                  Reportes
                  <i className="dropdown icon"></i>
                  <div className="menu">
                    <div onClick={this.navigateScoresCreate} className="item">
                      Ventas
                    </div>
                    <div onClick={this.navigateScoresShow} className="item">
                      Ingresos
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="ui compact menu">
                <div className="ui simple dropdown item">
                  <i className="lightbulb icon"></i>
                  Examples
                  <i className="dropdown icon"></i>
                  <div className="menu">
                    <div onClick={this.navigateMeteorTodo} className="item">
                      Meteor Todo
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right item">
              <div className="ui compact menu">
                <div className="ui simple dropdown item">
                  <i className="setting icon"></i>
                  <div className="menu">
                    <div className="item">Conf</div>
                    <div onClick={this.navigateLogin} className="item">
                      Exit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Logo></Logo>
      </div>
    );
  }
}
export default withRouter(NavigationBar);
