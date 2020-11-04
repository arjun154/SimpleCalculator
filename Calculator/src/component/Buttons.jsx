import React from "react";
import '../App.css';

export default class Calculator extends React.Component {
  arr = [
    "(",
    ")",
    "%",
    "C",
    "7",
    "8",
    "9",
    "÷",
    "4",
    "5",
    "6",
    "x",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+"
  ];
  render() {
    return (
      <>
        <div className="Cal">
          {this.arr.map(x => (
            <button onClick={this.props.handleClick} value={x}>
              {x}
            </button>
          ))}
        </div>
      </>
    );
  }
}
