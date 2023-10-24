import React, { Component} from "react";
import "./App.css";
import ButtonPanel from "../ButtonPanel/ButtonPanel";
import Display from "../Display/Display";
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




