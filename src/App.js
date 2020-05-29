import React from 'react';
import "./styles/app.css";
import Nav from "./components/Nav";
import Donate from "./components/Donate";

// TODO Look into React Router to point to different pages.
function App() {
  return (
    <div className="App">
      <h1 className="page-title">Cats of San Bernardino</h1>
      <Nav />
      <Donate /> 
    </div>
  );
}

export default App;
