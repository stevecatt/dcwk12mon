import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Menu} from './Menu'

class App extends Component {

  render() {
    return (
      <Menu isAuthenticated = {true} />
    )
  }

}

export default App;
