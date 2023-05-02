import React from "react";
import "./Properties.css";
import "typeface-roboto";
import Description from "./Description";
import Property from "./Property";
import AddDesc from "./AddDesc";

const Properties = () => {
  return (
    <>
      <AddDesc />
      <Description />
      <Property />
    </>
  );
};

export default Properties;
