import React, { Component } from "react";
import logo from "../images/logo1.png";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="col-sm-6 img-div">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse navbar-main"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link text-white" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                Wishlist
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                style={{ backgroundColor: "#7e0001" }}
                href="/"
              >
                Shop Now
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                <i className="fas fa-shopping-basket"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
