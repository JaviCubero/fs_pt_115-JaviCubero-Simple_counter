import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

const reactRender = ReactDOM.createRoot(document.getElementById('root'));

let counter = 0;

const userTime = prompt("Ingrese la cantidad de segundos a la que le gustaría recibir una alerta:");

setInterval(() => {
  reactRender.render(
    <React.StrictMode>
      <Home 
        counter = {counter}
        userTime = {userTime} 
      />
    </React.StrictMode>,
  )
  counter ++;
}, 1000);

