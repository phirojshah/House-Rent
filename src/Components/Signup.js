import React from "react";
import "./Signup.css";
import { NavLink, Navigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  // const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImage] = useState("");

  const [redirect, setRedirect] = useState(false);

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/createuser/", {
        name,
        email,
        contact,
        password,
        img,
      });
      alert("Registration successful. Now you can log in");
      setRedirect(true);
    } catch (e) {
      alert("Registration failed. Please try again later");
    }
  }

  if (redirect) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="wrapper">
      <div className="title">Sign Up</div>
      <form onSubmit={registerUser} enctype="multipart/form-data" method="post">
        <div className="field">
          <input
            type="text"
            required
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <label>Name</label>
        </div>

        <div className="field">
          <input
            type="text"
            required
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <label>Email Address</label>
        </div>
        <div className="field">
          <input
            type="number"
            required
            value={contact}
            onChange={(ev) => setContact(ev.target.value)}
          />
          <label>Contact Number</label>
        </div>
        <div className="Dob">
          <input
            type="date"
            // value={dob}
            // onChange={(ev) => setName(ev.target.value)}
            id="start"
            name="trip-start"
            min=""
            max=""
          />
        </div>

        <div className="field">
          <input
            type="password"
            required
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <label>Password</label>

          <div className="field">
            <input
              type="file"
              class="form-control-file"
              name="uploaded_file"
              value={img}
              onChange={(ev) => setImage(ev.target.value)}
            />
          </div>

          <div className="signup">
            <input type="submit" value="Create Account" />
          </div>
          <div className="already_account" href="/">
            Already have an account?
          </div>
          <div>
            <NavLink className="login-link" to="/Login">
              Login
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
