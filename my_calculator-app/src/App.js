import React, { Component} from "react";
import "./App.css";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
// Esta es una calculadora creada con Reactjs. eta compuesta de 3 componentes => App, ButtonPanel, y Display. 
//-----------****------****-----***----

// Componente App: Este es componente principal, contendrá la lógica de la calculadora y a los otros componentes.


class App extends Component {
  constructor() {
    super();
    this.state = {
      displayValue: "0"
    };
  }

render() {
  return (
    <div className="app">
      <Display value={this.state.displayValue} />
      <ButtonPanel />
    </div>
  );
}
}

handleButtonClick(value);{
    this.setState((prevState)=> ({
        displayValue: prevState.displayValue === "0" ? value : prevState.displayValue + value, 
    }));

    clearDisplay ();{
        this.setState({displayValue: "0"});
    };

    calculateResult() ;{
        try {
            const result=eval(this.state.displayValue);
            this.setState({ displayValue: result});
        }catch(error) {
            this.setState({displayValue: "Error"});
        }
    }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
