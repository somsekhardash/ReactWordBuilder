import React from "react";
import Slidebar from "./Slidebar";
import Body from "./Body";

export default class Layout extends React.Component {
  render() {
    return (
      <div class="toggled wrapper">
          <Slidebar />
          {this.props.children}
      </div>
    );
  }
}
