import React from 'react'
// import './App.css';
import List from './components/List/italianFood';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Favourite Italian Food </h1>
      </header>
      <body>
        <List/>
      </body>
    </div>
  );
}

export default App;
