import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      {/* Topbar */}
      <div className="bg-light py-2 border-bottom">
        <div className="container">
          <div className="row align-items-center text-center text-md-start">
            <div className="col-md-4 mb-2 mb-md-0">
              <small>Email: info@example.com | Phone: +880123456789</small>
            </div>
            <div className="col-md-4 mb-2 mb-md-0">
              <marquee behavior="scroll" direction="left" scrollamount="4">
                Welcome to our React-Bootstrap Website! Latest updates coming soon...
              </marquee>
            </div>
            <div className="col-md-4 text-md-end">
              <Link to="/login" className="me-3 text-decoration-none">Login</Link>
              <Link to="/register" className="text-decoration-none">Register</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            <img src="/logo192.png" alt="Logo" width="30" className="me-2" />
            ReactApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shojib">Shojib</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="container py-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
