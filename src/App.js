import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import {Router, Route, browserHistory} from 'react-router';
import logo from './logo.svg';
import './App.css';
import Cotizador from './components/Cotizador';
import Contacto from './components/Contacto';
import Routing from './components/index';
class App extends Component {
  render() {
    return (
      <Routing/>
    );
  }
}

export default App;
