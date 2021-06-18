import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logIn } from "../../backend/controller/authController";
import { resetAuth, setAuth } from "../../redux/actions/authAction";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loginInput, setLoginInput] = useState({});

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const authUser = useSelector((state) => state.auth.authUser);

  const handleRedirect = (user) => {
    if (user.role === "user") {
      history.push("/dashboard/user");
    } else if (user.role === "manager") {
      history.push("/dashboard/manager");
    } else if (user.role === "admin") {
      history.push("/dashboard/admin");
    } else {
      history.push("/home");
    }
  };

  if (isLoggedIn) {
    handleRedirect(authUser);
  }

  console.log(isLoggedIn);
  console.log(authUser);

  const handleInputChange = (e) => {
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = logIn(loginInput);
    if (response.status === 200) {
      dispatch(setAuth(response.data));
      handleRedirect(response.data);
      console.log("ok");
    } else {
      dispatch(resetAuth(response.data));
      console.log("response");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="col-md-6 border p-3 shadow text-center">
        <form onSubmit={handleSubmit}>
          <h3 className="">Start your session</h3>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              name="username"
              placeholder="Enter username"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleInputChange}
            />
          </div>
          <button className="btn btn-outline-primary ">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
