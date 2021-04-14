import React, { Component } from "react";
import IdolListProvider from "../context/_Provider/IdolListProvider";
import IdolList from "./IdolList";
import ProfileIdol from "./ProfileIdol";

export default class ContextIdolList extends Component {
  render() {
    return (
      <IdolListProvider>
        <div
          className="container-fluid"
          style={{
            backgroundImage: "url(./img/bgMusic.jpg)",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0,0,0, 0.6)",
            }}
          >
            <ProfileIdol />
            <IdolList />
          </div>
        </div>
      </IdolListProvider>
    );
  }
}
