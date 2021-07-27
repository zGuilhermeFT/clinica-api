import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/';
import 'material-icons/';
import 'animate.css';

console.warn = console.error = () => {};

ReactDOM.render(<App />, document.getElementById('root'));
