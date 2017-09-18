import React from "react";
export default class Jinput extends React.Component {
  render() {
    return (
        <div class="input-group">
            <span class="input-group-addon">$</span>
            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
            <span class="input-group-addon">.00</span>
        </div>
    );
  }
}
