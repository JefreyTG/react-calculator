import React from "react";
import REactDOM from "react-dom";
import "./index.css"; //Se puede importar CSS ocualquier otros estilos aqui.
import App from "./App"; //Importa el componente principal de tu aplicacion  en este caso una calculadora 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// En este archivo Importamos React y reactDOM de sus respectivos paquetes. Estos son necesarios para crear y renderizar los componentes React en el navegador ---- tambien se importa CSS (la hoja de estilos) que qeriamos usar ----- Importamos el componente proncipal de la aplicacion "App" desde su carpeta de origen

// "ReactDOM.render()" se usa para renderizar el componente "App". El componente "<React.StrictMode>" se usa para evidenciar  problemas potenciales en la aplicacion durante el desarrollo.

// La funcion "ReactDOM.render()" renderiza el componente React hacia un elemento HTML con el "id" de " root", es necesario tener un elemnto HTML con este "id" en el archivo  HTML (usualmente localizado en la carpeta "public").

