import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "../Page/login";
import { Signup } from "../Page/signup";
import { Alert } from "../Component/Alert";
import { Dashboard } from "../Page/Home/index";
import { ProtectedRoute } from "../AuthRoute/AuthRoute";
import { User } from "../Page/Home/User";
import { AddUserForm } from "../Page/Home/User/AddUser/AddUserForm";

import { NotFoundPage } from "../Page/NotFoundPage";

function App() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/login" Component={Login} />
        <ProtectedRoute exact path="/signup" Component={Signup} />
        <ProtectedRoute exact path="/" Component={Dashboard} />
        <ProtectedRoute path="/user" Component={User} />
        <ProtectedRoute path="/addUsersform" Component={AddUserForm} />
        <Route component={NotFoundPage} />
      </Switch>
      <Alert />
    </Router>
  );
}

export default App;
