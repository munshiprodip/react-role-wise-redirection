import React from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthRoute from "./lib/AuthRoute/AuthRoute";
import Admin from "./pages/Dashboard/Admin/Admin";
import ShopAdmin from "./pages/Dashboard/ShopAdmin/ShopAdmin";
import User from "./pages/Dashboard/User/User";
import HeaderNav from "./component/HeaderNav/HeaderNav";
import Footer from "./component/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Switch>
        <div className="container">
          <HeaderNav />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <AuthRoute
            exact
            path="/dashboard/admin"
            roles="admin"
            component={Admin}
          />
          <AuthRoute
            exact
            path="/dashboard/manager"
            roles="manager"
            component={ShopAdmin}
          />
          <AuthRoute exact path="/dashboard/user" roles="user" component={User} />
          <Footer/>
        </div>
      </Switch>
    </Router>
  );
};

export default App;