import React from "react";
import './App.css';

import CurrentBookContainer from './containers/bookContainer';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Chainalysis BTC-ETH Exchange Rates</h1>
        <h5>(Updates every 30 minutes)</h5>
      </div>
      <CurrentBookContainer />
    </div>
  );
}

export default App;
