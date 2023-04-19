import React, { Component } from "react";
import { render } from "react-dom";
import { Counter } from "../../src";

const Custom = ({ counter, increment, decrement }) => <p>{counter}</p>;

export default class Demo extends Component {
  render() {
    return (
      <div>
        <h1>counter Demo</h1>
        <Counter />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
