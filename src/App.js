import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import JMap from "./components/Map/JMap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <JMap />
      </div>
    );
  }
}

export default App;
