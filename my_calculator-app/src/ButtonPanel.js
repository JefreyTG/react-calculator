import React from "react";
import "./ButtonPanel.css"

function ButtonPanel(){
    return(
        <div className="button-panel">
            {
            /*definir los botones aqui */
            <>
                    /*definir los botones aqui */
                    <Button onClick={() => this.handleButtonClick('7')}>7</Button><Button onClick={() => this.handleButtonClick('8')}>8</Button><Button onClick={() => this.handleButtonClick('9')}>9</Button><Button onClick={() => this.handleButtonClick('+')}>+</Button><Button onClick={() => this.handleButtonClick('4')}>4</Button><Button onClick={() => this.handleButtonClick('5')}>5</Button><Button onClick={() => this.handleButtonClick('6')}>6</Button><Button Button onClick={() => this.handleButtonClick('-')}>-</Button><Button onClick={() => this.handleButtonClick('1')}>1</Button><Button onClick={() => this.handleButtonClick('2')}>2</Button><Button onClick={() => this.handleButtonClick('3')}>3</Button><Button onClick={() => this.handleButtonClick('*')}>*</Button><Button onClick={() => this.handleButtonClick('0')}>0</Button><Button onClick={() => this.handleButtonClick('.')}>.</Button><Button onClick={() => this.clearDisplay()}>C</Button><Button onClick={() => this.calculateResult()}>=</Button></>
            }
        </div>
    );
}
export default ButtonPanel

// Este componente contiene los Botones de la calculadora 