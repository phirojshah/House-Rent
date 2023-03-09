import React from "react";
import "./Signup.css";
function Signup() {
  return (
    <div className="wrapper">
      <div className="title">Sign Up</div>
      <form action="#">
        <div className="field">
          <input type="text" required />
          <label>Name</label>
        </div>

        <div className="field">
          <input type="text" required />
          <label>Email Address</label>
        </div>
        <div className="field">
          <input type="number" required />
          <label>Contact Number</label>
        </div>
        <div className="Dob">
          <input type="date" id="start" name="trip-start" min="" max="" />
        </div>

        <div className="field">
          <input type="password" required />
          <label>Password</label>
          <div className="signup">
            <input type="submit" value="Create Account" />
          </div>
          <div className="already_account" href="/">
            Already have an account?
          </div>
          <div className="login-link">
            <a href="/Login">Login</a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
