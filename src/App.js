import React from "react";
//import { Counter } from './features/counter/Counter';
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import RoomLocation from "./Components/RoomLocation";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <RoomLocation />
    </div>
  );
}

export default App;
