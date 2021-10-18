import React from "react";
import logo from './logo.svg';
import './App.css';

import CurrentBookContainer from './containers/bookContainer';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Chainalysis BTC-ETH Exchange Rates</h1>
      </div>
      <CurrentBookContainer />
    </div>
  );
}

export default App;
