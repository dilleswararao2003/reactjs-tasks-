import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '0', // The current value displayed on the calculator
      operand1: '',  // The first operand for calculations
      operator: '',  // The operator for calculations (+, -, *, /)
      operand2: '',  // The second operand for calculations
    };
  }

  handleButtonClick = (value) => {
    if (/[0-9]/.test(value)) {
      // Handle digit input
      if (this.state.display === '0' || this.state.operator) {
        this.setState({ display: value });
      } else {
        this.setState({ display: this.state.display + value });
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      // Handle operator input
      if (!this.state.operator) {
        this.setState({
          operand1: this.state.display,
          operator: value,
          display: '',
        });
      }
    } else if (value === '=') {
      // Handle equals button for calculation
      if (this.state.operand1 && this.state.operator && this.state.display) {
        const result = this.calculateResult();
        this.setState({
          display: result,
          operand1: result,
          operator: '',
        });
      }
    } else if (value === 'C') {
      // Handle clear button
      this.setState({
        display: '0',
        operand1: '',
        operator: '',
      });
    }
  };

  calculateResult = () => {
    const num1 = parseFloat(this.state.operand1);
    const num2 = parseFloat(this.state.display);

    switch (this.state.operator) {
      case '+':
        return (num1 + num2).toString();
      case '-':
        return (num1 - num2).toString();
      case '*':
        return (num1 * num2).toString();
      case '/':
        return (num1 / num2).toString();
      default:
        return this.state.display;
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.display}</div>
        <div className="buttons">
          <button className="button" onClick={() => this.handleButtonClick('7')}>7</button>
          <button className="button" onClick={() => this.handleButtonClick('8')}>8</button>
          <button className="button" onClick={() => this.handleButtonClick('9')}>9</button>
          <button className="button operator" onClick={() => this.handleButtonClick('+')}>+</button>
          <button className="button" onClick={() => this.handleButtonClick('4')}>4</button>
          <button className="button" onClick={() => this.handleButtonClick('5')}>5</button>
          <button className="button" onClick={() => this.handleButtonClick('6')}>6</button>
          <button className="button operator" onClick={() => this.handleButtonClick('-')}>-</button>
          <button className="button" onClick={() => this.handleButtonClick('1')}>1</button>
          <button className="button" onClick={() => this.handleButtonClick('2')}>2</button>
          <button className="button" onClick={() => this.handleButtonClick('3')}>3</button>
          <button className="button operator" onClick={() => this.handleButtonClick('*')}>*</button>
          <button className="button" onClick={() => this.handleButtonClick('0')}>0</button>
          <button className="button" onClick={() => this.handleButtonClick('.')}>.</button>
          <button className="button" onClick={() => this.handleButtonClick('+/-')}>+/-</button>
          <button className="button operator" onClick={() => this.handleButtonClick('/')}>/</button>
          <button className="button" onClick={() => this.handleButtonClick('C')}>C</button>
          <button className="button equals" onClick={() => this.handleButtonClick('=')}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
