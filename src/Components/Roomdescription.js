import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./roomdescription.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Roomdescription() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="Location_icon">
        <LocationOnIcon />
        <h3 className="Location_text">Royal Bakhuldol</h3>
      </div>
      <div className="image_container">
        <div className="image_container">
          <Slider {...settings}>
            <div>
              <img className="photo" src="/images/slide-img1.jpg" />
            </div>
            <div>
              <img className="photo" src="/images/slide-img2.jpg" />
            </div>
            <div>
              <img className="photo" src="/images/slide-img3.jpg" />
            </div>
          </Slider>
        </div>

        <div className="info">
          <h4>Room Properties:</h4>
          <ul className="property-list">
            <li>WiFi</li>
            <li>Complimentary water</li>
            <li>Flat screen LCD TV</li>
            <li>Tea/coffee making facilities</li>
            <li>Fan</li>
            <li>Hairdryer</li>
            <li>Pure white linen and towels</li>
          </ul>
        </div>
        <div className="google_maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.0824114269662!2d85.53373409746754!3d27.62196417997669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb09dc051b9583%3A0xa6ac86eef12c596f!2sBhakundol%20Khaja%20ghar!5e0!3m2!1sen!2snp!4v1680262911899!5m2!1sen!2snp"
            width="400"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="description">
          <h4>
            All our guestrooms are elegantly furnished with handmade furniture
            include luxury en-suite facilities with complimentary amenities
            pack, flat screen LCD TV, tea/coffee making facilities, fan,
            hairdryer and the finest pure white linen and towels. All our
            guestrooms are elegantly furnished with handmade furniture include
            luxury en-suite facilities with complimentary amenities pack, flat
            screen LCD TV, tea/coffee making facilities, fan, hairdryer and the
            finest pure white linen and towels. All our guestrooms are elegantly
            furnished with handmade furniture include luxury en-suite facilities
            with complimentary amenities pack, flat screen LCD TV, tea/coffee
            making facilities, fan, hairdryer and the finest pure white linen
            and towels.
          </h4>
        </div>
      </div>
    </>
  );
}

export default Roomdescription;
