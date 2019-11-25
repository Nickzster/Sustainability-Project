import React from "react";
import LandingPage from "./components/LandingPage/index";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
