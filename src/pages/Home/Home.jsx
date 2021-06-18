import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {users} from "./../../backend/database/database"

const Home = () => {
  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
  const authUser = useSelector(state=>state.auth.authUser)
  return (
    <div
      className="d-flex justify-content-center align-items-center border shadow"
      style={{ height: "450px" }}
    >
      <div className="col-md-6 card m-3">
        <div className="card-header">Home</div>
        <div className="card-body">
          {
            !isLoggedIn? 
            <div>
              <h2>User list</h2>
              <table className="table">
                <thead>
                  <tr>
                    <td>#</td>
                    <td>Username</td>
                    <td>Password</td>
                    <td>Role</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map((user,i)=>
                    <tr>
                      <td>{++i}</td>
                      <td>{user.username}</td>
                      <td>{user.password}</td>
                      <td>{user.role}</td>
                    </tr>
                    )
                  }
                </tbody>
              </table>
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            </div>
          :
            <div>
              <h3>Hi, {authUser.username}</h3>
              <Link to={`/dashboard/${authUser.role}`} className="btn btn-primary">
                Dashboard
              </Link>
            </div>
          }
          
        </div>
      </div>
    </div>
  );
};

export default Home;
