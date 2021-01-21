import React, { Component } from "react";
import cardImg from "../images/MainCard1.png";
import path from "../images/Path 14.png";
import rectangel from "../images/Rectangle 1.png";
import rectange5 from "../images/Rectangle 5.png";
import Navbar from "./Navbar";
export default class MainCard extends Component {
  render() {
    return (
      <div className="card pmd-card  text-white text-center overlay-card m-0 p-0">
        <div
          className="main-card parent"
          style={{ height: "101vh",}}
        >
          <img
            src={cardImg}
            alt="not found"
            className="pmd-card-media image1"
            height="100%"
            width="100%"
          />
          <img
            src={path}
            alt="not found"
            width="100%"
            style={{ display: "inline" }}
            className="image2"
          />
          <img
            src={rectangel}
            alt="not found"
            width="100%"
            style={{ display: "inline" }}
            className="image2"
          />
          <img
            src={rectange5}
            alt="not found"
            width="100%"
            style={{ display: "inline" }}
            className="image4"
          />
        </div>
        <div className="card-img-overlay mt-0 pt-0">
          <Navbar />
        </div>
      </div>
    );
  }
}
