// Dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import App from "./App";
import Login from "./components/login/Login";
import NavigationBar from "./components/nav-bar/NavigationBar";
import UsersTable from "./components/users/Table";
import UsersForm from "./components/users/Form";
import ProductsTable from "./components/products/Table";
import ProductsForm from "./components/products/Form";
import ClientsTable from "./components/clients/Table";
import ClientsForm from "./components/clients/Form";
import SalesForm from "./components/sales/Form";
import SalesTable from "./components/sales/Table";
import SalesProductsTable from "./components/sales-products/Table";
import Todo from "./components/todo/Todo";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route
        exact
        path="/sales-table-products"
        component={SalesProductsTable}
      />
      <Route exact path="/sales-table" component={SalesTable} />
      <Route exact path="/sales-form" component={SalesForm} />
      <Route exact path="/clients-form" component={ClientsForm} />
      <Route exact path="/clients-table" component={ClientsTable} />
      <Route exact path="/products-form" component={ProductsForm} />
      <Route exact path="/products-table" component={ProductsTable} />
      <Route exact path="/users-form" component={UsersForm} />
      <Route exact path="/users-table" component={UsersTable} />
      <Route exact path="/nav-bar" component={NavigationBar} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/todo" component={Todo} />
      <Route exact path="/" component={Login} />
      <Route component={Login} />
    </Switch>
  </App>
);

export default AppRoutes;
