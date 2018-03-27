import React, { Component } from 'react';
import './App.css';

import routes from './routes'
import { Link } from 'react-router-dom'

class App extends Component {


  render() {
    return (
      <div className="App">
      <header className="App-header">
        <Link to="/">Route1</Link>
        <Link to="/Route2">Route2</Link>
        <Link to="/Route3">Route3</Link>
        {/* <Link to="/Route3">Route3</Link> */}

      </header>
      
      {routes}
      
      </div>
    );
  }
}

export default App;
