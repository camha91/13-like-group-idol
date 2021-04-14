import React, { Component } from "react";

export default class ProfileIdol extends Component {
  render() {
    return (
      <div>
        <h3>Profile</h3>
        <div style={{ width: "350px" }} className="card text-white bg-primary">
          <img
            style={{ width: "100%", height: "200px" }}
            className="card-img-top"
            src="./img/black-pink.jpg"
            alt="./img/black-pink.jpg"
          />
          <div className="card-body">
            <h4 className="card-title">Group Name: </h4>
            <p className="card-text">Year Debut: </p>
            <button
              style={{
                background: "none",
                border: "1px solid red",
                borderradius: "px",
              }}
              classname="card-text"
            >
              100 <i className="fa fa-heart" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
