import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";
function Viewers() {
  return (
    <>
      <Text>
        <h2>Properties by location</h2>
        <p>
          Each place is a good choice, it will help you make the right decision,
          do not miss the opportunity to discover our wonderful properties.
        </p>
      </Text>
      <Container>
        <Wrap>
          <img src="/images/slide-img3.jpg" alt="viewerImg" />
          <NavLink to="/Roomdescription">Learn More</NavLink>
        </Wrap>
        <Wrap>
          <img src="/images/slide-img2.jpg" alt="viewerImg" />
          <NavLink to="/Roomdescription">Learn More</NavLink>
        </Wrap>
        <Wrap>
          <img src="/images/slide-img3.jpg" alt="viewerImg" />
          <NavLink to="/Roomdescription">Learn More</NavLink>
        </Wrap>
        <Wrap>
          <img src="/images/slide-img5.jpg" alt="viewerImg" />
          <NavLink to="/Roomdescription">Learn More</NavLink>
        </Wrap>
        <Wrap>
          <img src="/images/slide.img4.jpg" alt="viewerImg" />
          <NavLink to="/Roomdescription">Learn More</NavLink>
        </Wrap>
      </Container>
    </>
  );
}

export default Viewers;

const Text = styled.div`
  display: block;
  padding-top: 20px;
  padding-left: 26px;
  /* margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px; */
`;

const Container = styled.div`
  margin-top: 0px;
  margin-left: 20px;
  margin-right: 20px;
  display: grid;
  padding: 0px 0 26px;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;

  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    // '&' concatinate hover to wrap
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
