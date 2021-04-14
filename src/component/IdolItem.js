import React, { Component } from "react";

export default class IdolItem extends Component {
  render() {
    return (
      <div>
        <div className="card text-white bg-primary">
          <img
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
