import React from "react";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      result: 0 // Initialize the result to 0
    };
  }

  // Function to handle addition
  handleAddition = () => {
    this.setState((prevState) => ({
      result: prevState.result + 2
    }));
  };

  // Function to handle squaring
  handleSquare = () => {
    this.setState((prevState) => ({
      result: prevState.result ** 2
    }));
  };

  // Function to handle doubling
  handleDouble = () => {
    this.setState((prevState) => ({
      result: prevState.result * 2
    }));
  };

  // Function to handle dividing by 2
  handleDivideBy2 = () => {
    this.setState((prevState) => ({
      result: prevState.result / 2
    }));
  };

  // Function to handle subtracting 2
  handleSubtract2 = () => {
    this.setState((prevState) => ({
      result: prevState.result - 2
    }));
  };

  render() {
    return (
      <div className="calculator">
        <div className="result">Result: {this.state.result}</div>
        <div className="buttons">
          <button onClick={this.handleAddition}>Add 2</button>
          <button onClick={this.handleSquare}>Square</button>
          <button onClick={this.handleDouble}>Double</button>
          <button onClick={this.handleDivideBy2}>Divide by 2</button>
          <button onClick={this.handleSubtract2}>Subtract 2</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
