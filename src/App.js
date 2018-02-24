import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StockList from './StockList'

class App extends Component {
  render() {
    return (
      <div>
        <StockList />
      </div>
    );
  }
}

export default App;
