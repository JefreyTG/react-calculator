import React from "react";
import Button from "react-bootstrap/Button";
import "./ButtonPanel.css";


function ButtonPanel(props) {
  return (

    <div className="button-panel">
      <Button onClick={() => props.handleButtonClick('7')}>7</Button>
      <Button onClick={() => props.handleButtonClick('8')}>8</Button>
      <Button onClick={() => props.handleButtonClick('9')}>9</Button>
      <Button onClick={() => props.handleButtonClick('+')}>+</Button>
      <Button onClick={() => props.handleButtonClick('4')}>4</Button>
      <Button onClick={() => props.handleButtonClick('5')}>5</Button>
      <Button onClick={() => props.handleButtonClick('6')}>6</Button>
      <Button onClick={() => props.handleButtonClick('-')}>-</Button>
      <Button onClick={() => props.handleButtonClick('1')}>1</Button>
      <Button onClick={() => props.handleButtonClick('2')}>2</Button>
      <Button onClick={() => props.handleButtonClick('3')}>3</Button>
      <Button onClick={() => props.handleButtonClick('*')}>*</Button>
      <Button onClick={() => props.handleButtonClick('0')}>0</Button>
      <Button onClick={() => props.handleButtonClick('.')}>.</Button>
      <Button onClick={() => props.clearDisplay('')}>C</Button>
      <Button onClick={() => props.calculateResult('=')}>=</Button>
    </div>
  );
}

export default  ButtonPanel;
