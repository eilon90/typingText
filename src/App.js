import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TypingText from './components/typingText';

function App() {
  

  return (
    <div className="App">
      <TypingText text = 'hello' time = {1000}/>
    </div>
  );
}

export default App;
