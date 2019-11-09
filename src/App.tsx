import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorButton from "./components/ColorButton";

const App: React.FC = () => {
  function clickHandler() {
    console.log('clickHandler()');
  }

  return (
    <div className="App">
      <ColorButton color="darkred" onClick={clickHandler}/>
    </div>
  );
}

export default App;
