import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = event => {
    event.preventDefault();
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = event => {
    event.preventDefault();
    this.setState({
      count: this.state.count - 1
    });
  };

  resetCount = event => {
    event.preventDefault();
    this.setState({
      count: 0
    });
  };

  render() {
    return (
      <div className="app">
        <div className="background">
          <div className="interface">
            <div className="count-display">
              <div>COUNT:</div>
              <div>{this.state.count}</div>
            </div>
            <div className="input-container">
              <div
                className="input"
                id="decrementor"
                onClick={this.decrementCount}
              >
                -
              </div>
              <div
                className="input"
                id="incrementor"
                onClick={this.incrementCount}
              >
                +
              </div>
              <div className="input" id="reset" onClick={this.resetCount}>
                RESET
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
