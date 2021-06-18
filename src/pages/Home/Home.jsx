import React from "react";
import { Link } from "react-router-dom";
import HeaderNav from "../../component/HeaderNav/HeaderNav";

const Home = () => {
  return (
    <div>
      <HeaderNav />
      <div className="card m-3">
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
