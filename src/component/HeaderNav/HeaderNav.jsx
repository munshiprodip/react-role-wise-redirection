import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetAuth } from "../../redux/actions/authAction";

const HeaderNav = () => {
const dispatch = useDispatch()
  const authUser = useSelector(state=>state.auth.authUser)
  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container">
        <a className="navbar-brand" href="/">
           Role wise redirection
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav ">
            <Link
              to="/home"
              className="nav-link active"
              aria-current="page"
            >
              Home
            </Link>
            {
              isLoggedIn &&
              <Link
                to={`/dashboard/${authUser.role}`}
                className="nav-link "
                aria-current="page"
              >
                Dashboard
              </Link>
            }
            
            {isLoggedIn?<button  className="btn nav-link" onClick={()=>dispatch(resetAuth({}))}>
            Logout
            </button>:<Link to="/login" className="nav-link" href="#">
              Login
            </Link>}
            
          </div>
        </div>
      </div>
    </nav>
  );
};
export default HeaderNav;
