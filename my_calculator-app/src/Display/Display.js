import React from "react";
import "./Display.css"
// Este componente mostrara el valor actual en la calculadora

function Display(props) {
    return (
        <div className="display">
            {props.value}
        </div>
    );
}

export default Display;