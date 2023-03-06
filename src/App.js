import React from "react";
//import { Counter } from './features/counter/Counter';
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import RoomLocation from "./Components/RoomLocation";
import Login from "./Components/Login";
import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
// import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Home /> */}
      {/* <RoomLocation /> */}
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
