import React from "react";
import { Link } from "react-router-dom";
import HeaderNav from "../../../component/HeaderNav/HeaderNav";

const Admin = () => {
  return (
    <div>
      <HeaderNav />
      <div className="card m-3">
        <div className="card-header">Admin Dashboard</div>
        <div className="card-body">
          <h5 className="card-title">Admin's content </h5>
          <p className="card-text">Admn's contents</p>
          <Link to="/home" className="btn btn-primary">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;
