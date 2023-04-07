import React from "react";
import Properties_by_location from "./Properties_by_location";
import "./Properties.css";
import Product from "./Product";

const Properties_screen = () => {
  return (
    <>
      Latest Rooms near you
      <div className="properties_name">
        {Properties_by_location.map((product) => (
          // <h3>{product.name} </h3>
          <Product product={product} />
        ))}
      </div>
    </>
  );
};

export default Properties_screen;
