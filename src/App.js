import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/geral.scss';
import Header from './Componetes/Principais/Header';
import Routes from './Componetes/Routes';
import Footer from './Componetes/Principais/Footer';

export default class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <Routes />
        <Footer />
      </div>
    );
  }
}
