import React from "react";
import PropTypes from "prop-types";
import { modeDark } from "../constants";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme={props.mode}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
            <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
            <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
            <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={()=>{props.toggleMode(null)}}
              checked={props.mode === modeDark}
            />
            <label
              className={`form-check-label text-${props.mode === modeDark ? "light" : "dark"}`}
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = { aboutText: "About" };

export default Navbar;
