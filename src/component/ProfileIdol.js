import React, { Component } from "react";
import { IdolListContext } from "../context/_Context/IdolListContext";

export default class ProfileIdol extends Component {
  render() {
    return (
      <IdolListContext.Consumer>
        {(value) => {
          let activeIdol = value.idolListState.find(
            (idol) => idol.active === true
          );
          return (
            <div>
              <h3>Profile</h3>
              <div
                style={{ width: "350px" }}
                className="card text-white bg-success text-center"
              >
                <img
                  style={{ width: "100%", height: "200px" }}
                  className="card-img-top"
                  src={activeIdol.img}
                  alt={activeIdol.img}
                />
                <div className="card-body">
                  <h4 style={{ color: "deeppink" }} className="card-title">
                    {activeIdol.name}
                  </h4>
                  <p className="card-text">
                    Year Debut: {activeIdol.yearDebut}
                  </p>
                  <button
                    style={{
                      background: "none",
                      border: "1px solid red",
                      borderRadius: "5px",
                      color: "pink",
                    }}
                    classname="card-text"
                  >
                    {activeIdol.like} <i className="fa fa-heart" />
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </IdolListContext.Consumer>
    );
  }
}
