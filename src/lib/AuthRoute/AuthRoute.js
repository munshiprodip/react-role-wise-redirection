import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AuthRoute = ({ component: Component, roles, ...rest }) => {
  const authUser = useSelector((state) => state.auth.authUser);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isLoggedIn) {
          // not logged in so redirect to login page with the return url
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }

        // check if route is restricted by role
        if (roles && roles !== authUser.role) {
          // role not authorised so redirect to home page
          return <Redirect to={{ pathname: "/home" }} />;
        }

        // authorised so return component
        return <Component {...props} />;
      }}
    />
  );
};

export default AuthRoute;
