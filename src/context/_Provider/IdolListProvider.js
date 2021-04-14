import React, { Component } from "react";
import dataIdol from "../../data/dataIdols.json";
import { IdolListContext } from "../_Context/IdolListContext";

export default class IdolListProvider extends Component {
  state = {
    idolListState: dataIdol,
  };

  setActiveIdol = (id) => {
    const idolListStateUpdate = this.state.idolListState.map((idol, index) => {
      // Compare to id is clicked
      if (idol.id === id) {
        idol.like += 1;
        idol.active = true;
      } else {
        idol.active = false;
      }
      return { ...idol };
    });

    // Update state to render UI again
    this.setState({ idolListState: idolListStateUpdate });
  };
  render() {
    console.log(this.state.idolListState);

    return (
      <IdolListContext.Provider
        value={{
          idolListState: this.state.idolListState,
          setActiveIdol: this.setActiveIdol,
        }}
      >
        {this.props.children}
      </IdolListContext.Provider>
    );
  }
}
