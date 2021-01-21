import React, { Component } from "react";
import AboutImg from "../images/About.png";
export default class AboutUs extends Component {
  render() {
    return (
      <div classNameName="main-about">
        <div className="main-div card pmd-card overlay-card">
          <img
            src={AboutImg}
            alt="About"
            className="pmd-card-media about-img"
          />
          <div className="card-img-overlay about-txt-div">
            <h2 className="card-title about-text">About Us</h2>
            <p
              className="card-text text-dark text-justify about-text-p"
              style={{ fontSize: "20px" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
