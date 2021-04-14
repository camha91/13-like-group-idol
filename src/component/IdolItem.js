import React, { Component } from "react";
import { IdolListContext } from "../context/_Context/IdolListContext";

export default class IdolItem extends Component {
  render() {
    let { idolItem } = this.props;
    return (
      <IdolListContext.Consumer>
        {(value) => {
          return (
            <div>
              <div
                style={{ width: "300px" }}
                className="card text-white bg-dark mt-2"
              >
                <img
                  style={{ width: "100%", height: "250px" }}
                  className="card-img-top"
                  src={idolItem.img}
                  alt={idolItem.img}
                />
                <div className="card-body">
                  <h4 style={{ color: "deeppink" }} className="card-title">
                    {idolItem.name}
                  </h4>
                  <p className="card-text">Year Debut: {idolItem.yearDebut}</p>
                  <button
                    onClick={() => value.setActiveIdol(idolItem.id)}
                    style={{
                      background: "none",
                      border: "1px solid red",
                      borderRadius: "5px",
                      color: "pink",
                    }}
                    classname="card-text"
                  >
                    {idolItem.like} <i className="fa fa-heart" />
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
