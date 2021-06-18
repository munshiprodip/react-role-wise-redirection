import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center border shadow"
      style={{ height: "450px" }}
    >
      <div className="col-md-6 card m-3">
        <div className="card-header">User Dashboard</div>
        <div className="card-body">
          <h5 className="card-title">User content </h5>
          <p className="card-text">User contents</p>
          <Link to="/home" className="btn btn-primary">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
