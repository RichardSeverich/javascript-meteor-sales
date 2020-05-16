// Meteor
import { Meteor } from "meteor/meteor";
// React
import React from "react";
import { render } from "react-dom";
// React - Router
import { BrowserRouter as Router } from "react-router-dom";
// Routes
import AppRoutes from "../imports/ui/AppRoutes";
// User Accounts
import "../imports/startup/accounts-confg.js";

Meteor.startup(() => {
  render(
    <Router>
      <AppRoutes />
    </Router>,
    document.getElementById("react-target")
  );
});
