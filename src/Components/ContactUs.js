import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "./ContactUs.css";
export default function ContactUs() {
  return (
    <>
      <section className="contact">
        <div className="contentss">
          <h2>Contact Us</h2>
          <p>
            This is the contact page of our website 'House Rent'. You can
            contact us through this page and the contacts give below. You can
            submit the given form below to contact us as well.
          </p>
        </div>
        <div className="container">
          <div className="contactinfo">
            <div className="box">
              <div className="icon">
                <FaMapMarkerAlt></FaMapMarkerAlt>
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  45200 Kathmandu University<br></br>Dhulikhel, Kavre
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <FaPhoneAlt></FaPhoneAlt>
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>9867500984, 9847098678</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <FaEnvelope></FaEnvelope>
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>renthouse699@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contactform">
            <form>
              <h2>Send Message</h2>
              <div className="inputbox">
                <input type="text" required="required" />
                <span>Full Name</span>
              </div>
              <div className="inputbox">
                <input type="text" name="email" required="required" />
                <span>Email</span>
              </div>
              <div className="inputbox">
                <textarea required="required"></textarea>
                <span>Type Your Message...</span>
              </div>
              <div className="inputbox">
                <input type="submit" value="send" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
