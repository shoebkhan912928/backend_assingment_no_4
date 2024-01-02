import React from 'react'
import { NavLink, Link } from 'react-router-dom'
function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient">
                <div className="container-fluid">
                    <NavLink
                        className="navbar-brand text-uppercase"
                        to="/">SALES App</NavLink>
                    <button
                        className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li
                                className="nav-item">
                                <NavLink
                                    className="nav-link text-uppercase"
                                    to="/addseles">ADD SELES</NavLink>
                            </li>
                            <li
                                className="nav-item">
                                <NavLink
                                    className="nav-link text-uppercase"
                                    to="/top_5_sele">TOP 5 SELES</NavLink>
                            </li>
                            <li
                                className="nav-item">
                                <NavLink
                                    className="nav-link text-uppercase"
                                    to="/total_revenue">TODAYS'S TOTAL REVENUE </NavLink>
                            </li>
                            <li
                                className="nav-item">
                                <NavLink
                                    className="nav-link text-uppercase"
                                    to="/login">LOGIN </NavLink>
                            </li>
                            <li
                                className="nav-item">
                                <NavLink
                                    className="nav-link text-uppercase"
                                    to="/registration">REGISTER </NavLink>
                            </li>
                            <li
                                className="nav-item">
                                <NavLink
                                    className="nav-link text-uppercase"
                                    to="/contact">LOGUOT</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;


