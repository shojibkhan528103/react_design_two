import React from "react";
import { Link, Outlet } from "react-router-dom";
function Layout() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">ReactApp</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto">
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
            <div>

                < Outlet />

            </div>
        </div>
    );
}

export default Layout