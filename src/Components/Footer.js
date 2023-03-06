import React from "react";
import "./Footer.css";
// import twitter from './src/twitter.png'
export default function Footer() {
  return (
    <div className="footer">
      <div className="sb_footer secpad">
        <div className="sb_footer-links">
          <div className="sb_footer-links-div">
            <h4>For Business</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/healthplan">
              <p>Health Plan</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>
          <div className="sb_footer-links-div">
            <h4>Resources</h4>
            <a href="/resource">
              <p>Resource Center</p>
            </a>
            <a href="/resource">
              <p>Testimonials</p>
            </a>
            <a href="/resource">
              <p>STV</p>
            </a>
          </div>
          <div className="sb_footer-links-div">
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/career">
              <p>Career</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>
          <div className="sb_footer-links-div">
            <h4>Connect With Us</h4>
            <div className="socialm">
              <p>
                <img
                  src="Documents\gg\hh\react\footer\src\twitter.png"
                  alt="twitter"
                />
              </p>
              <p>FB</p>
              <p>insta</p>
              <p>linkedn</p>
              {/* <textarea> </textarea> */}
            </div>
            <div className="container"></div>
          </div>
          <input type="email" placeholder="E-mail"></input>
        </div>
      </div>
      <hr />
      <div className="sb_footer-below">
        <div className="sb_footer-copyright">
          <p>@{new Date().getFullYear()} Jodds. All right reserved.</p>
        </div>
        <div className="sb_footer-below-links">
          <a href="/terms">
            <div>
              <p>Terms & Conditions</p>
            </div>
          </a>
          <a href="/privacy">
            <div>
              <p>Privacy</p>
            </div>
          </a>
          <a href="/security">
            <div>
              <p>Security</p>
            </div>
          </a>
          <a href="/cookie">
            <div>
              <p>Cookie Declaration</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
