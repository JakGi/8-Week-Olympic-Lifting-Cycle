import React from "react";
import "./App.css";
import Title from "./components/Title";

import Menu from "./components/Menu";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Menu />
      </div>
    </Router>
  );
}

export default App;
