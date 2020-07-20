import React from "react";
import Lists from "./Components/Lists/Main/Main";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div style={{ marginBottom: "10px" }}>
            <h2>Bem vindo ao seu To Do Generator!</h2>
          </div>
          <Lists />
        </header>
      </div>
    </Router>
  );
}

export default App;
