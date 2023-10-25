import React, { Component} from "react";
import ButtonPanel from "../ButtonPanel/ButtonPanel.js"
import Display from "../Display/Display";
import "./App.css";
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
    <div className="my-app">
      <Display value={this.state.displayValue} />,
      <ButtonPanel />
    </div>
  );
}
}

export default App

