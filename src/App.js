import React, { Component } from 'react';
import './App.css';

import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import LoginComponent from './components/login';
import HomeComponent from './components/Home';
class App extends Component {  
  render() {

    return (
      <div className="App">
        {/*<LoginComponent/>*/}
        <HomeComponent/>
        {/*<Route path="/" exact Component={LoginComponent}/>          */}
      </div>
    );
  }
}


export default App;