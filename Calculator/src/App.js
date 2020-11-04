import React from 'react';
import './App.css';
import Buttons from "./component/Buttons";
import Calculator from "./component/Calculator";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      res: ""
    };
  }
  handleClick = e => {
    let val = e.target.value;
    if (val === "=") {
      this.calculate();
    } else if (val === "C") {
      this.clearRes();
    } else {
      this.setState({
        res: this.state.res + val
      });
    }
  };
  calculate = () => {
    let val = this.state.res;
    if (val.includes("x")) {
      val = val.replace("x", "*");
    }
    if (val.includes("÷")) {
      val = val.replace("÷", "/");
    }
    if (val.includes("%")) {
      let a = val.split("%");
      val = a[0] + "*" + a[1] + "/100";
    }
    try {
      this.setState({
        // eslint-disable-next-line
        res: (eval(val) || "") + 0
      });
    } catch (e) {
      this.setState({
        res: "error"
      });
    }
  };
  clearRes = () => {
    this.setState({
      res: ""
    });
  };
  render() {
    return (
      <div className="App">
        <div style={{ display: "inline:block" }}>
          <h1>Simple Calculator</h1>
          <Calculator result={this.state.res} />
          <Buttons handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}