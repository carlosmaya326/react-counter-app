import React from 'react';
import reactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css';

const divRoot = document.querySelector("#root");

// reactDOM.render(<PrimeraApp saludo="Hola, soy Juan" />, divRoot);
reactDOM.render(<CounterApp value={10} />, divRoot);