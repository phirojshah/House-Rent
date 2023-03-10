import React from "react";
//import { Counter } from './features/counter/Counter';
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
