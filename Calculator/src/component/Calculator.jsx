import React from "react";
import '../App.css';

export default class Calculator extends React.Component {
  render() {
    let res = this.props.result;
    return (
      <>
        <div className="result">
          <p>{res}</p>
        </div>
      </>
    );
  }
}
