import React from "react";
import logo from "./logo.svg";
import "./App.css";
import api from "./api.json";

function App() {
  return (
    <div className="App">
      {api.addons.map(addon => (
        <div>
          <h1>{addon.displayName}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
