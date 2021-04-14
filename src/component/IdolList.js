import React, { Component } from "react";
import { IdolListContext } from "../context/_Context/IdolListContext";
import IdolItem from "./IdolItem";

export default class IdolList extends Component {
  render() {
    return (
      <IdolListContext.Consumer>
        {(value) => {
          return (
            <div>
              <h3>Idol List</h3>
              <div className="row">
                {value.idolListState.map((idol, index) => {
                  return (
                    <div className="col-3" key={index}>
                      <IdolItem idolItem={idol} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }}
      </IdolListContext.Consumer>
    );
  }
}
