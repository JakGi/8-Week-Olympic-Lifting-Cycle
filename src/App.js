import React from "react";
import "./App.css";
import Title from "./components/Title";
import Menu from "./components/Menu";
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Menu />
        <MainPage />
      </div>
    </Router>
  );
}

export default App;
