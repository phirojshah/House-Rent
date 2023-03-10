import React from "react";
import styled from "styled-components";

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

const AboutUsTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const AboutUsText = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <AboutUsTitle>About Us</AboutUsTitle>
      <AboutUsText>
        At House Rent, our mission is to provide high-quality rental properties
        to our customers while delivering exceptional customer service. We pride
        ourselves on being a reliable and trustworthy partner in the rental
        market.
      </AboutUsText>
      <AboutUsText>
        Our team consists of experienced professionals who are dedicated to
        helping you find your dream rental property. We work hard to ensure that
        all of our properties are well-maintained and meet our high standards of
        quality.
      </AboutUsText>
      <AboutUsText>
        Whether you're a first-time renter or an experienced tenant, we are here
        to help you every step of the way. Thank you for choosing House Rent as
        your rental partner.
      </AboutUsText>
    </AboutUsContainer>
  );
};

export default AboutUs;
