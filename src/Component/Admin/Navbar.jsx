import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLogout=()=>{
    localStorage.removeItem("Token");
    localStorage.removeItem("Token1");
    localStorage.removeItem("User_Id")
  }
  return (
    <div>
      <aside className="left-sidebar" data-sidebarbg="skin6">
        <div className="scroll-sidebar">
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
              <li className="sidebar-item pt-2">
                <Link
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  to="/dashboard"
                  aria-expanded="false"
                >
                  <i className="far fa-clock" aria-hidden="true"></i>
                  <span className="hide-menu">Dashboard</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  to="/usercreate"
                  aria-expanded="false"
                >
                  <i className="far fa-clock" aria-hidden="true"></i>
                  <span className="hide-menu">create</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  to="/userlist"
                  aria-expanded="false"
                >
                  <i className="far fa-clock" aria-hidden="true"></i>
                  <span className="hide-menu">Basic-Table</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  to="/"
                  aria-expanded="false"
                >
                  <i className="far fa-clock" aria-hidden="true"></i>
                  <span className="hide-menu" onClick={()=>handleLogout()}>Logout</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Navbar;
