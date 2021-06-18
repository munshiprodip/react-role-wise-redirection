import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center border shadow"
      style={{ height: "450px" }}
    >
      <div className="col-md-6 card m-3">
        <div className="card-header">Home</div>
        <div className="card-body">
          <h5 className="card-title">Home content </h5>
          <p className="card-text">Hme contents</p>
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
