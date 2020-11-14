import React from 'react';
import './App.css';
import Canvas from './audio/canvasOperator/canvas';
import CreateOctave from './audio/ui/createOctave';

function App() {


 
  return (
    <div className="App">
      <header className="App-header">
        <CreateOctave />
      </header>
    </div>
  );
}

export default App;
