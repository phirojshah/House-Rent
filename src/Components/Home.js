import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
// import RoomLocation from "./RoomLocation";

function Home() {
  return (
    <Container>
      <ImageSlider />
      {/* <RoomLocation /> */}
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh-70px);
  padding: o calc(3.5vw+ 5px);
`;
