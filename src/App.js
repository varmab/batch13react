import React from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './Counter'
import Welcome from './Welcome';
import Like from './Like'
import Friends from './Friends'
import Todos from './Todos'
import Library from './library/Library'
import Users from './Users'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Batch 15 Library</h1>
      </header>
      <Library/>
    </div>
  );
}

export default App;
