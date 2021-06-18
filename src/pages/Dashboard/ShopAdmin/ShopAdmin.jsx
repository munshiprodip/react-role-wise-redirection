import React from "react";
import { Link } from "react-router-dom";
import HeaderNav from "../../../component/HeaderNav/HeaderNav";

const ShopAdmin = () => {
  return (
    <div>
      <HeaderNav />
      <div className="card m-3">
        <div className="card-header">Shop Dashboard</div>
        <div className="card-body">
          <h5 className="card-title">Shop Manager content </h5>
          <p className="card-text">Shop Manager contents</p>
          <Link to="/home" className="btn btn-primary">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopAdmin;
