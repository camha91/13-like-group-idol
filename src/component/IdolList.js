import React, { Component } from "react";
import IdolItem from "./IdolItem";

export default class IdolList extends Component {
  render() {
    return (
      <div>
        <h3>Idol List</h3>
        <div className="row">
          <div className="col-3">
            <IdolItem />
          </div>
          <div className="col-3">
            <IdolItem />
          </div>
          <div className="col-3">
            <IdolItem />
          </div>
          <div className="col-3">
            <IdolItem />
          </div>
        </div>
      </div>
    );
  }
}
