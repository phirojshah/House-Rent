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
import Roomdescription from "./Components/Roomdescription";
import Blogs from "./Components/Blogs";
import Properties from "./Components/Properties";
import Reset from "./Components/Reset";
import SideMenu from "./admin/SideMenu";
import PageContent from "./admin/PageContent";
import AdminProperties from "./admin/Pages/AdminProperties";
import Users from "./admin/Pages/Users";
import Dashboard from "./admin/Pages/Dashboard";
import { Space } from "antd";
import RoomState from "./Context/roomdesc/Roomstate";

function App() {
  return (
    <div className="App">
    <RoomState>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/Roomdescription" element={<Roomdescription />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Properties" element={<Properties />} />
        <Route path="/Reset" element={<Reset />} />
        <Route path="/admindashboard" element={<Dashboard />} />
        <Route path="/adminusers" element={<Users />} />
        <Route path="/adminproperties" element={<AdminProperties />} />
      </Routes>
      <Footer />
      </RoomState>
    </div>
  );
}

export default App;
