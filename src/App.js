import React from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './Counter'
import Welcome from './Welcome';
import Like from './Like'
import Friends from './Friends'
import Todos from './Todos'
import Library from './Library'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name="Varma" password="123456"/>
      </header>
      <Library/>
    </div>
  );
}

export default App;
