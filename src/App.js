import React, { Component } from "react";
import "./App.scss";
import { RadioProvider } from "./RadioContext";

// components
import MapContainer from "./components/Map/index";
import CountrySelecotr from "./components/countrySelector/index";

class App extends Component {
  render() {
    return (
      <RadioProvider>
        <MapContainer />
        <CountrySelecotr />
      </RadioProvider>
    );
  }
}

export default App;
