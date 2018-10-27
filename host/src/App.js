import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Plugin from "./Plugin";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Plugin url="http://localhost:8000/dist/index.js" />
        <Plugin url="http://localhost:8001/dist/index.js" />
        <Plugin
          url="http://localhost:8002/dist/index.js"
          hostText="Hello from host application"
        />
      </div>
    );
  }
}

export default App;
